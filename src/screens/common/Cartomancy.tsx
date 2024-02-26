import {
  Ace_of_Pentacles,
  Ace_of_Swords,
  Ace_of_Wands,
  Ace_of_cups,
  Eight_of_Cups,
  Eight_of_Pentacles,
  Eight_of_Swords,
  Eight_of_Wands,
  Five_of_Cups,
  Five_of_Pentacles,
  Five_of_Swords,
  Five_of_Wands,
  Four_of_Cups,
  Four_of_Pentacles,
  Four_of_Swords,
  Four_of_Wands,
  King_of_Cups,
  King_of_Pentacles,
  King_of_Swords,
  King_of_Wands,
  Knight_of_Cups,
  Knight_of_Pentacles,
  Knight_of_Swords,
  Knight_of_Wands,
  Nine_of_Cups,
  Nine_of_Pentacles,
  Nine_of_Swords,
  Nine_of_Wands,
  Page_of_Cups,
  Page_of_Pentacles,
  Page_of_Swords,
  Page_of_Wands,
  Queen_of_Cups,
  Queen_of_Pentacles,
  Queen_of_Swords,
  Queen_of_Wands,
  Seven_of_Cups,
  Seven_of_Pentacles,
  Seven_of_Swords,
  Seven_of_Wands,
  Six_of_Cups,
  Six_of_Pentacles,
  Six_of_Swords,
  Six_of_Wands,
  Ten_of_Cups,
  Ten_of_Pentacles,
  Ten_of_Swords,
  Ten_of_Wands,
  The_Chariot,
  The_Death,
  The_Devil,
  The_Emperor,
  The_Empress,
  The_Hanged_Man,
  The_Hermit,
  The_Hierophant,
  The_High_Priestess,
  The_Judgement,
  The_Justice,
  The_Lovers,
  The_Magician,
  The_Moon,
  The_Star,
  The_Strength,
  The_Sun,
  The_Temperance,
  The_Tower,
  The_Wheel_of_Fortune,
  The_World,
  Three_of_Pentacles,
  Three_of_Swords,
  Three_of_Wands,
  Two_of_Cup,
  Two_of_Pentacles,
  Two_of_Swords,
  Two_of_Wands,
  the_pool,
  welcome,
} from "@assets";
import { BaseButton, Toolbar } from "@components";
import { colors, theme } from "@utils";
import { useState } from "react";
import ImageViewer from "react-native-image-zoom-viewer";
import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");
const Cartomancy = () => {
  const [card, setCard] = useState<number>();
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const getZodiacMeaningLabel = () => {
    switch (card) {
      case 1:
        return "The Fool";
      case 2:
        return "The Magician";
      case 3:
        return "The High Priestess";
      case 4:
        return "The Empress";
      case 5:
        return "The Emperor";
      case 6:
        return "The Hierophant";
      case 7:
        return "The Lovers";
      case 8:
        return "The Chariot";
      case 9:
        return "The Strength";
      case 10:
        return "The Hermit";
      case 11:
        return "The Wheel of Fortune";
      case 12:
        return "The Justice";
      case 13:
        return "The Hanged Man";
      case 14:
        return "The Death";
      case 15:
        return "The Temperance";
      case 16:
        return "The Devil";
      case 17:
        return "The Tower";
      case 18:
        return "The Star";
      case 19:
        return "The Moon";
      case 20:
        return "The Sun";
      case 21:
        return "The Judgement";
      case 22:
        return "The World";
      case 23:
        return "Ace of cups";
      case 24:
        return "Two of Cup";
      case 25:
        return "Four of Cups";
      case 26:
        return "Five of Cups";
      case 27:
        return "Six of Cups";
      case 28:
        return "Seven of Cups";
      case 29:
        return "Eight of Cups";
      case 30:
        return "Nine of Cups";
      case 31:
        return "Ten of Cups";
      case 32:
        return "Page of Cups";
      case 33:
        return "Knight of Cups";
      case 34:
        return "Queen of Cups";
      case 35:
        return "King of Cups";
      case 36:
        return "Ace of Pentacles";
      case 37:
        return "Two of Pentacles";
      case 38:
        return "Three of Pentacles";
      case 39:
        return "Four of Pentacles";
      case 40:
        return "Five of Pentacles";
      case 41:
        return "Six of Pentacles";
      case 42:
        return "Seven of Pentacles";
      case 43:
        return "Eight of Pentacles";
      case 44:
        return "Nine of Pentacles";
      case 45:
        return "Ten of Pentacles";
      case 46:
        return "Page of Pentacles";
      case 47:
        return "Knight of Pentacles ";
      case 48:
        return "Queen of Pentacles ";
      case 49:
        return "King of Pentacles ";
      case 50:
        return "Ace of Swords ";
      case 51:
        return "Two of Swords ";
      case 52:
        return "Three of Swords ";
      case 53:
        return "Four of Swords ";
      case 54:
        return "Five of Swords ";
      case 55:
        return "Six of Swords ";
      case 56:
        return "Seven of Swords ";
      case 57:
        return "Eight of Swords ";
      case 58:
        return "Nine of Swords ";
      case 59:
        return "Ten of Swords ";
      case 60:
        return "Page of Swords ";
      case 61:
        return "Knight of Swords ";
      case 62:
        return "Queen of Swords ";
      case 63:
        return "King of Swords ";
      case 64:
        return "Ace of Wands ";
      case 65:
        return "Two of Wands ";
      case 66:
        return "Three of Wands ";
      case 67:
        return "Four of Wands ";
      case 68:
        return "Five of Wands ";
      case 69:
        return "Six of Wands ";
      case 70:
        return "Seven of Wands ";
      case 71:
        return "Eight of Wands ";
      case 72:
        return "Nine of Wands ";
      case 73:
        return "Ten of Wands ";
      case 74:
        return "Page of Wands ";
      case 75:
        return "Knight of Wands ";
      case 76:
        return "Queen of Wands ";
      case 77:
        return "King of Wands ";
      case 78:
        return " ";
      default:
        return "";
    }
  };

  const diplayImageCard = () => {
    switch (card) {
      case 1:
        return the_pool;
      case 2:
        return The_Magician;
      case 3:
        return The_High_Priestess;
      case 4:
        return The_Empress;
      case 5:
        return The_Emperor;
      case 6:
        return The_Hierophant;
      case 7:
        return The_Lovers;
      case 8:
        return The_Chariot;
      case 9:
        return The_Strength;
      case 10:
        return The_Hermit;
      case 11:
        return The_Wheel_of_Fortune;
      case 12:
        return The_Justice;
      case 13:
        return The_Hanged_Man;
      case 14:
        return The_Death;
      case 15:
        return The_Temperance;
      case 16:
        return The_Devil;
      case 17:
        return The_Tower;
      case 18:
        return The_Star;
      case 19:
        return The_Moon;
      case 20:
        return The_Sun;
      case 21:
        return The_Judgement;
      case 22:
        return The_World;
      case 23:
        return Ace_of_cups;
      case 24:
        return Two_of_Cup;
      case 25:
        return Four_of_Cups;
      case 26:
        return Five_of_Cups;
      case 27:
        return Six_of_Cups;
      case 28:
        return Seven_of_Cups;
      case 29:
        return Eight_of_Cups;
      case 30:
        return Nine_of_Cups;
      case 31:
        return Ten_of_Cups;
      case 32:
        return Page_of_Cups;
      case 33:
        return Knight_of_Cups;
      case 34:
        return Queen_of_Cups;
      case 35:
        return King_of_Cups;
      case 36:
        return Ace_of_Pentacles;
      case 37:
        return Two_of_Pentacles;
      case 38:
        return Three_of_Pentacles;
      case 39:
        return Four_of_Pentacles;
      case 40:
        return Five_of_Pentacles;
      case 41:
        return Six_of_Pentacles;
      case 42:
        return Seven_of_Pentacles;
      case 43:
        return Eight_of_Pentacles;
      case 44:
        return Nine_of_Pentacles;
      case 45:
        return Ten_of_Pentacles;
      case 46:
        return Page_of_Pentacles;
      case 47:
        return Knight_of_Pentacles;
      case 48:
        return Queen_of_Pentacles;
      case 49:
        return King_of_Pentacles;
      case 50:
        return Ace_of_Swords;
      case 51:
        return Two_of_Swords;
      case 52:
        return Three_of_Swords;
      case 53:
        return Four_of_Swords;
      case 54:
        return Five_of_Swords;
      case 55:
        return Six_of_Swords;
      case 56:
        return Seven_of_Swords;
      case 57:
        return Eight_of_Swords;
      case 58:
        return Nine_of_Swords;
      case 59:
        return Ten_of_Swords;
      case 60:
        return Page_of_Swords;
      case 61:
        return Knight_of_Swords;
      case 62:
        return Queen_of_Swords;
      case 63:
        return King_of_Swords;
      case 64:
        return Ace_of_Wands;
      case 65:
        return Two_of_Wands;
      case 66:
        return Three_of_Wands;
      case 67:
        return Four_of_Wands;
      case 68:
        return Five_of_Wands;
      case 69:
        return Six_of_Wands;
      case 70:
        return Seven_of_Wands;
      case 71:
        return Eight_of_Wands;
      case 72:
        return Nine_of_Wands;
      case 73:
        return Ten_of_Wands;
      case 74:
        return Page_of_Wands;
      case 75:
        return Knight_of_Wands;
      case 76:
        return Queen_of_Wands;
      case 77:
        return King_of_Wands;
      case 78:
        return " ";
      default:
        return "";
    }
  };

  const getZodiacMeaning = () => {
    switch (card) {
      case 1:
        return "Khi The Fool xuất hiện tức là là bạn cần suy ngẫm về việc liệu bạn có đang trải qua quá nhiều nỗi sợ hãi trong cuộc sống của mình hay không. The Fool khuyên rằng bạn cần can đảm và sáng tạo hơn nữa, để mở ra những lĩnh vực mới trong cuộc sống của bạn.";
      case 2:
        return "Lá bài the Magician báo hiệu thành công trong cuộc sống, bạn cần sử dụng các kỹ năng, công cụ và nguồn lực mà bạn sẵn có để đạt được mục tiêu. Sáng tạo, kiến thức và các mối quan hệ xung quanh là chìa khóa để bạn đạt được thành công.";
      case 3:
        return "The High Priestess đại diện cho những cảm xúc bị dồn nén lâu ngày, cho thấy rằng bạn phụ thuộc cảm xúc quá nhiều vào người khác. Bạn cần nâng cao lòng tin về chính bản thân mình, những câu trả lời đã sẵn có bên trong bạn, hãy là chính mình!";
      case 4:
        return "The Empress đại diện cho sự nuôi dưỡng và chăm sóc. Đây là dấu hiệu thiên chức làm mẹ đang soi chiếu bạn. Hoặc có thể, bạn sẽ nhận được sự giúp đỡ từ một người mẹ, người chị. Nếu bản thân bạn đang là đấng sinh thành của ai đó, lá bài khuyên rằng bạn cần quan tâm nhiều hơn đến con cái.";
      case 5:
        return "Lá bài The Emperor báo hiệu rằng bạn hoặc ai đó đang lạm dụng quá mức sức mạnh quyền lực với người xung quanh. Thái độ hống hách của họ khiến bạn chán ngấy và có thể gây ảnh hưởng tiêu cực. Để giải quyết vấn đề, bạn hoặc họ cần lắng nghe ý kiến của người xung quanh và cân bằng giữa cảm xúc và thái độ trong công việc.";
      case 6:
        return "The Hierophant cho thấy bạn hoặc người đó là người yêu thích lối sống cơ bản, ít thay đổi và mong muốn mọi thứ đi theo một quy trình truyền thống nhất. Bạn thích những thứ có sẵn và ít khi muốn thay đổi. Điềm báo của Hierophant là đừng thử thách với điều gì đó mới ở thời điểm hiện tại.";
      case 7:
        return "The lovers thể hiện một tình yêu hoàn hảo, đôi bên đang có sự hài hòa và hấp dẫn lẫn nhau. Bạn cần có lòng tin vào nửa kia, để họ được tiếp thêm sức mạnh và niềm tin, vượt qua những trở ngại và khó khăn trong cuộc sống. Đây là dấu hiệu cho thấy một cái kết đẹp cho mối quan hệ đang đến rất gần.";
      case 8:
        return "Lá bài Tarot the Chariot là dấu hiệu bạn cần một chuyến đi xa sau những ngày khó khăn vừa qua. Biết đâu bạn sẽ nhận được lời mời cho một chuyến du lịch, hoặc nếu không phải thì The Chariot là điềm báo về xe cộ và giao thông – có thể bạn sẽ được sở hữu một chiếc xe mới chẳng hạn.";
      case 9:
        return "Dù mang nghĩa tiếng Anh là sức mạnh, nhưng lá bài này tượng trưng cho một phương pháp tiếp cận dựa vào lòng trắc ẩn và đồng cảm. Tất cả mọi khó khăn sẽ được hóa giải nếu bạn có đủ tình yêu thương và sự kiên trì, chứ không phải dựa vào vũ lực để giải quyết.";
      case 10:
        return "The Hermit đang khuyên nhủ bạn nhìn vào đứa trẻ bên trong nhiều hơn, dường như bạn đã dần bỏ quên cái tôi và cảm xúc của mình. Đừng mãi chạy theo những thứ xô bồ ngoài kia mà quên mất rằng đôi khi chúng ta cần chậm lại để nuôi dưỡng bản thân lớn thêm từng ngày.";
      case 11:
        return "Lá bài The Wheel of Fortune cho thấy một bước ngoặt cuộc đời đang đến gần, bởi lúc nào cuộc sống cũng sẽ có mặt tốt và mặt xấu. Bạn cần phải chấp nhận có đôi khi những chuyện tồi tệ sẽ xảy ra ngay sau khi điều tốt đẹp vừa đến. Tuy nhiên, bất cứ khi nào một cánh cửa đóng lại, một cánh cửa khác sẽ mở ra ngay sau đó.";
      case 12:
        return "Lá bài Tarot Justice dự đoán trật tự và công bằng sẽ được thiết lập lại. Bạn sẽ nhận được những gì mà bản thân xứng đáng, được công nhận cũng như những kẻ luôn nhận được sự thiên vị sẽ bị trừng phạt. Hãy sống và phán xử cuộc đời bằng cái nhìn công tâm nhất và bạn sẽ nhận được điều tương tự.";
      case 13:
        return "Lá bài the Hanged Man dự đoán một tình huống có thể đẩy bạn rơi vào trạng thái bị trăn trở giữa nhiều sự lựa chọn, và quyết định của bạn sẽ gặp phải nhiều sự tác động từ ngoại cảnh. Điều cần làm là suy nghĩ thật kĩ càng và quyết đoán khi đưa ra quyết định.";
      case 14:
        return "Death không hề là một lá bài dự đoán cho cái chết hay điềm xui xẻo, thậm chí, nó còn có thể là sự chuyển hóa đến giai đoạn tốt đẹp hơn sau nhiều sự cố đã và đang xảy ra. Đôi khi sự kết thúc là một điều cần thiết cho khởi đầu mới.";
      case 15:
        return "Lá Temperance hàm ý rằng bạn cần nhìn xa trông trộng và rõ ràng về những mục tiêu mà bạn muốn đạt được nếu muốn thành công. Đừng phí mất thời gian với những chi tiết ngoài lề mà hãy dành thời gian tập trung vào từng ý chính một, đừng ôm đồm những cái không cần thiết để rồi chẳng cái nào hoàn thiện. ";
      case 16:
        return "The Devil dự báo về một kẻ xấu đang dòm ngó cuộc sống của bạn, hoặc cho biết rằng bạn đang bị quá tải. Dường như thời gian này đòi hỏi bạn cần phải cảnh giác nhiều hơn, cũng như tự nhận thấy những thứ đang trói buộc bản thân để giải quyết triệt để một cách nhanh nhất.                ";
      case 17:
        return "The Tower dự đoán về một tương lai đầy rẫy sự bất hòa và tranh cãi, tuy vậy không hẳn là những tranh cãi trên đều tồi tệ hoặc bạn sẽ là người thua cuộc. Hãy cố gắng nhìn nhận câu chuyện bằng cái đầu lạnh và cách nhìn khách quan nhất để giải quyết vấn đề. ";
      case 18:
        return "Lá bài the Star cho thấy dường như vũ trụ đang gửi những tín hiệu tốt đẹp về hy vọng và phù trợ đến bạn. Sắp tới sẽ là một giai đoạn đầy màu hồng dành cho chủ nhân của lá The Star, những điều mà bạn vốn đã nỗ lực sẽ gặt hái được thành quả tương xứng. ";
      case 19:
        return "The Moon cho thấy bạn vẫn còn đang bị giam giữ trong cái bóng của quá khứ. Nơi đó, bạn dường như không thể tìm được cách thoát ra hoàn toàn. Đây là tín hiệu dự báo rằng bạn cần phải tìm kiếm cho mình một động lực mới, thoát ra khỏi những thứ không còn đáng để bận tâm để tập trung cho tương lai. ";
      case 20:
        return "Nếu bạn đang bế tắc hoặc đang có một kết quả cần được biết thì The Sun dự báo cho một chiến thắng, một tương lai đầy rực rỡ và tiền tài. Bạn cứ yên tâm rằng, The Sun sẽ là tín hiệu cho thấy vũ trụ đứng về phía bạn và mọi sự sẽ được an bài theo cách tốt đẹp nhất, vì bạn xứng đáng. ";
      case 21:
        return " Ý nghĩa của lá bài Judgement báo hiệu rằng sắp tới bạn sẽ gặp được người giúp bạn khai mở tầm nhìn, tri thức, giúp bạn có được ánh sáng soi rọi để tìm được phương hướng giải quyết tốt nhất trước những điều mơ hồ vốn vây quanh bạn. Khi điều đó đến, hãy mở rộng lòng mình để tiếp thu những bài học đắt giá.";
      case 22:
        return "Lá the World cho thấy những lời tán dương và tung hô sẽ đến trong tương lai gần, nghĩa là sau những nỗ lực trước nay, bạn sẽ có được sự công nhận từ ai đó – ví dụ như sếp, bạn bè hoặc gia đình. Lá bài này cũng dự đoán về sự thành đạt sẽ đến với bạn trong tương lai, bất kể lĩnh vực công việc hay tình yêu. ";
      case 23:
        return "Ace of cups đánh dấu sự bắt đầu của một tình yêu hoặc một mối quan hệ – tình bạn mới. Mối quan hệ đóng vai trò là cầu nối cảm xúc của bạn đến thực tại, giúp bạn có thêm động lực để tiến tới. Dòng chảy cảm xúc – nước trong cốc sẽ dìu dắt đứa trẻ ngây thơ trong bạn vượt qua được những bế tắc đang chực nuốt lấy cuộc sống của bạn. ";
      case 24:
        return "Nếu bạn bốc được lá bài này, hãy nên vui mừng vì mối quan hệ mà bạn đang bận tâm được dự đoán là sẽ hòa hợp hơn trong thời gian sắp tới. Các bạn sẽ là nửa kia của nhau bởi cả hai biết cách để cân bằng với đối phương, biến “tôi” thành “chúng ta” để đi đến sự cam kết trong tương lai. ";
      case 25:
        return "Four of Cups biểu hiện sự thất vọng và chán nản với một đối tượng cụ thể trong quá khứ. Dần dà, bạn cảm thấy chẳng còn muốn níu kéo hay để tâm, đó là dấu hiệu tốt để bạn rũ bỏ đi những điều không còn xứng đáng, để chính bạn có thể nhận về những điều tốt đẹp hơn.  ";
      case 26:
        return "Five of Cups cảnh báo bạn đừng để những sai lầm trong quá khứ cuốn chân hoặc khiến bạn chần chừ trước những khó khăn tương tự trong hiện tại. Bất cứ bài học nào cũng có giá trị, nhưng đừng để nó biến thành rào cản giữa bạn và tương lai. ";
      case 27:
        return "Six of Cups dự đoán cho một sự trở lại, có thể là một người mà bạn từng yêu quý sắp quay về bên bạn. Họ có thể mang theo những lời gợi ý cho một tương lai khác hoặc một món quà để hàn gắn cho những tổn thương họ gây ra. Tuy nhiên, quyết định nằm ở bạn! ";
      case 28:
        return "Seven of Cups cảnh báo rằng bạn đang chìm đắm vào những điều hư ảo quá nhiều, đừng mơ mộng nữa mà hãy thức dậy ngay thôi vì chẳng có thành công nào đến với kẻ lười biếng cả. ";
      case 29:
        return "Eight of Cups bộc lộ được sự mệt mỏi bên trong, khi mà bạn hoặc họ đã gần như bất lực trước những khó khăn và không còn muốn cố gắng. Hãy cân nhắc lại toàn bộ vấn đề bởi lúc này đây, sự từ bỏ có lẽ là phương pháp giải thoát cho cả hai. ";
      case 30:
        return "Nine of Cups xoa dịu những cảm xúc trống trải khi cho biết rằng bạn sẽ luôn được yêu thương và giúp đỡ. Hạnh phúc mà bạn đang có là vô cùng trân quý, hãy cố gắng tận hưởng chứ đừng xem nhẹ để rồi bỏ lỡ trong tiếc nuối nhé. ";
      case 31:
        return "Giống như Two of Cups nhưng lá Ten of Cups dự đoán một cái kết viên mãn ở tầm cao hơn, kể cả về mặt tình yêu hoặc hôn nhân. Bạn và người đó sẽ hạnh phúc bên nhau sau rất nhiều gian khổ, và đó sẽ cột mốc đánh dấu cho một cuộc đồng hành mãi mãi về sau. ";
      case 32:
        return "Page of Cups cho thấy bạn sắp có những nguồn cảm hứng mới, đó có thể là từ một người hoặc một sự việc nào đó để thúc đẩy bạn theo đuổi một tương lai tươi sáng hơn. Đừng lo lắng mà hãy tin vào cảm xúc và trực giác của bản thân nhé. ";
      case 33:
        return "Knight of Cups báo hiệu cho lời cam kết và sự sẵn sàng theo đuổi một điều gì đó mới. Nếu Page of Cups dự báo cho nguồn cảm hứng sắp đến, thì Knight cho thấy bạn đã đủ trưởng thành và hành trang để bắt đầu cho những cuộc phiêu lưu. ";
      case 34:
        return "Khi lá bài Tarot Queen of Cups xuất hiện, nó cho thấy bạn là người có lòng từ bi và rất biết suy nghĩ cho hoàn cảnh của người khác. Điều đó là một món quà mà không phải ai cũng có được, bởi chính sự thấu hiểu là cách để một người có thể vượt qua những cảm xúc tiêu cực trong bản thân. ";
      case 35:
        return "King of Cups cho thấy bạn hoặc đối tượng muốn xem là một ông hoàng trong việc kiềm chế cảm xúc. Họ rất khéo léo cân bằng tình yêu, sự nghiệp và bạn bè. Tuy nhiên, đôi khi sự lý trí lại giết chết đi những cảm xúc non trẻ trong tình yêu đấy nhé. ";
      case 36:
        return "Ace of Pentacles là một dấu hiệu may mắn rằng sắp tới, vấn đề tài chính hoặc sự nghiệp, dự án đầu tư của bạn sẽ có chuyển biến tốt. Đó thậm chí có thể là một cơ hội việc làm mới phù hợp cho bạn. ";
      case 37:
        return "Two of Pentacles nhắc nhở bạn cần cân đối tài chính, gia đình và bạn bè trong cuộc sống, đừng vì quá mải mê theo đuổi giá trị vật chất mà bỏ quên những giá trị tinh thần vốn cũng rất quan trọng. ";
      case 38:
        return "Lá bài này nói lên hoàn cảnh éo le hiện tại: bạn đang lạc bước trong môi trường công việc, những ý kiến của bạn không nhận được sự chấp thuận từ cấp trên hay đồng nghiệp. Đây là một tín hiệu không tốt bởi bạn là kiểu người cần một môi trường phù hợp để phát triển và thể hiện những góc cạnh của bản thân. ";
      case 39:
        return "Lá bài Four of Pentacles mang đến cảm giác trái ngược nhau. Một mặt, Four of Pentacles cho thấy bạn đã hoàn thành được rất nhiều mục tiêu mình đề ra và thu về vô số của cải vật chất. Tuy nhiên, lá bài cũng biểu hiện khi bạn dữ giả về mặt tài chính, bạn bắt đầu nảy sinh sự tham lam và ích kỷ. ";
      case 40:
        return "Five of Pentacles tượng trưng cho thời gian bạn gặp khó khăn về vấn đề chi tiêu, thậm chí là rơi vào cảnh túng thiếu và nghèo đói. Lá bài cho thấy rằng bạn đã trải qua những thất bại khiến bản thân không còn một “xu dính túi”. Đồng thời, Five of Pentacles cũng ngụ ý về những trường hợp xui xẻo trong cuộc sống của bạn như bệnh tật, thất nghiệp, thua lỗ, cô đơn. ";
      case 41:
        return "Khác với 2 lá 4 và 5, Six of Pentacles cho bạn thấy sự hài hòa về mặt vật chất. Bạn là một người chi tiêu khá cân bằng và luôn chia sẻ với những người xung quanh mặc dù bản thân cũng không quá dư dả. ";
      case 42:
        return "Lá bài thứ 7 trong bộ Suit of Pentacles, Seven of Pentacles đã chỉ ra bạn đang thất vọng như thế nào. Bạn cố gắng và dồn hết tâm huyết vào chuyện gì đó nhưng kết quả nhận lại chỉ là sự thất bại.\nKhi đối diện với là bài này, bạn nên làm gì? Hãy kiên nhẫn và tìm ra giá trị đích thực của bản thân, đồng thời xem xét lại mục tiêu công việc đã thật sự chuẩn xác hay chưa. ";
      case 43:
        return "Eight of Pentacles là lá bà nói về giai đoạn đầu trong nghề nghiệp mà bạn đã lựa chọn hay còn gọi là học nghề. Học nghề hiểu đơn giản là bạn đang được tiếp thu kiến thức và kỹ năng mới từ người khác cùng công việc.                 ";
      case 44:
        return "Nine of Pentacles có thể sẽ khiến bạn hy vọng nhiều hơn vì nó nói rằng bạn sắp đạt được điều mình mong muốn. Lá bài mang ý nghĩa tích cực, giúp thúc đẩy tinh thần tiến về phía trước của bạn để hoàn thành mục tiêu đề ra lúc ban đầu. ";
      case 45:
        return "Trải bài có lá Ten of Pentacles là sự tròn trịa và may mắn, thể hiện cho cuộc sống sung túc và giàu có. Đây chính là lúc bạn tận hưởng thành quả sau thời gian làm việc cật lực. Hãy quên đi nỗi lo về tiền bạc vì giờ đây sự nghiệp hay tài chính của bạn đều rất vững chắc. ";
      case 46:
        return "Page of Pentacles là lá bài cho thấy bạn là một người trong lòng ôm đầy hoài bão và rất mong muốn thực hiện chúng. Từ Page ở đây ý nói bạn đang vô cùng nhiệt huyết cũng như muốn tập trung theo đuổi mục tiêu mà bản thân đã ấp ủ từ rất lâu. ";
      case 47:
        return "Knight of Pentacles khuyên bạn nên cố gắng làm việc theo chữ tín để có được sự tin tưởng từ gia đình, bạn bè, đồng nghiệp hay đối tác. Bên cạnh đó, hãy thiết lập cho mình một thói quen nào đó liên quan đến sự tin cậy để bảo đảm công việc diễn ra trọn vẹn hơn. ";
      case 48:
        return "Queen of Pentacles nói về một người có tính độc lập cao, sống một mình nhưng vẫn rất biết cách yêu thương và làm bạn với chính mình. Người này còn có công việc tốt, thu nhập ổn định và luôn đề cao giá trị gia đình. Họ luôn cố gắng dung hòa giữa thời gian dành cho công việc và các mối quan hệ thân quen. ";
      case 49:
        return "Nếu gặp phải lá bài King of Pentacles, đó chính là lúc bạn nên sống một cách thực tế và theo dõi mọi biến động của thế giới xung quanh. Hãy giải quyết những vấn đề mình gặp phải bằng bản lĩnh, lý trí chứ không quá phụ thuộc vào cảm xúc.\nNgoài ra, bạn cũng nên tận dụng khả năng vốn có của bản thân để tự tạo cơ hội thành công. Lá bài này dường như phù hợp với người có chức vụ cao, hoạt động trong giới chính trị hoặc phải quản lý tổ chức, công ty tầm cỡ. ";
      case 50:
        return "Ace of Swords là lá bài có ý nghĩa vô cùng tích cực, nói về cảm hứng và sự sáng tạo không ngừng nghỉ của bạn. Lá bài chỉ ra rằng bạn luôn có lối suy nghĩ mới lạ và tràn đầy năng lượng để biến ý tưởng thành hiện thực.\nBên cạnh đó, Ace of Swords còn muốn nhắn nhủ đến bạn hãy kiên trì theo đuổi những dự định đặt ra, phát triển ý tưởng để có thành công vang dội. Trong khi đó, đừng quên tự mình tạo ra những cơ hội quý giá có lợi cho sự thăng tiến của bản thân. ";
      case 51:
        return "Lá bài Two of Swords đóng vai trò nhắc nhở bạn rằng mọi quyết định trong cuộc sống đều phải trả giá. Vì vậy hãy luôn đảm bảo rằng bản thân đã suy nghĩ kỹ lưỡng, lường trước được các hậu quả có thể xảy đến trước khi làm bất cứ việc gì. ";
      case 52:
        return "Three of Swords mang ý nghĩa chữa lành sâu sắc nếu bạn là người đang phải gánh chịu những tổn thương cả về tâm trí lẫn thể xác. Lá bài nói rằng một khi bạn học được cách chấp nhận mọi sự khổ đau, bạn sẽ không còn cảm thấy sự hiện diện của chúng nữa. ";
      case 53:
        return "Đối với những ai đang làm việc quá nhiều dẫn đến kiệt sức và stress, lá bài Four of Swords giống như một chiếc “phao cứu sinh” vậy. Nó khuyên rằng bạn nên có thời gian thư giãn và chiêm nghiệm sau bao nhiêu năm tháng cố gắng. Đôi khi nghỉ ngơi và hồi tưởng về những chuyện đã qua cũng là cách bạn cải thiện công việc của mình. ";
      case 54:
        return "Five of Swords giống như một lời cảnh báo cho sự tham vọng mà không màng đến hậu quả của bạn. Lá bài khuyên rằng bạn không nên bất chấp làm những việc gây ảnh hưởng đến người khác chỉ để đạt được mục đích của riêng mình. Bởi đến cuối cùng, chính bạn mới là người thiệt thòi nhất. ";
      case 55:
        return "Ví dụ bạn đang muốn thoát khỏi sự đau khổ và những kỷ niệm về mối tình vừa chia tay. Tuy nhiên Six of Swords lại chỉ ra rằng bạn đang gặp rất nhiều thách thức và khó khăn trong quá trình từ bỏ.\nĐối với trường hợp này, lời khuyên cho bạn là điều gì cũng cần thời gian. Bạn không cần tìm cách để tha thứ cho kẻ đã không còn yêu bạn, mà hãy chữa lành bản thân bằng cách quan tâm nhiều hơn đế thế giới nội tâm và đẹp hơn mỗi ngày. ";
      case 56:
        return "Khi lật phải lá bài Seven of Swords, điều này có nghĩa bạn đang muốn phủi bỏ trách nhiệm trong một vấn đề nào đó. Bạn có xu trốn chạy khỏi thực tế bất lợi và mặc kệ đồng đội. Điều này thật sự không tốt và lá bài khuyên bạn hãy đối mặt với chông gai và chiến thắng chúng. ";
      case 57:
        return "Lá Tarot Eight of Swords mách bảo bạn rằng bạn đang bị ai đó âm thầm cướp công và hạn chế con đường thăng tiến. Điều bạn cần làm ngay tại thời điểm này chính là xác định giá trị và năng lực bản thân. Sau đó cố gắng hết sức đấu tranh cho quyền lợi mà mình xứng đáng được nhận. ";
      case 58:
        return "“Tiên trách kỷ, hậu trách nhân” là đúng nhưng Nine of Swords cũng chỉ ra rằng bạn không nên quá hà khắc với bản thân. Nếu bạn đang có xu hướng luôn đổ lỗi cho mình khi việc gì đó không thành công, hãy tỉnh thức.\nThật ra ngay khi bạn biết tự kiểm điểm bản thân thì bạn đã là một người xứng đáng được khen ngợi hơn là chê trách. Vì vậy hãy chỉ rút kinh nghiệm và tiếp tục cố gắng chứ đừng lún sâu vào việc tự trách. ";
      case 59:
        return "Ten of Swords thể hiện rằng bạn đang dần trưởng thành khi đã học được cách chấp nhận mọi niềm vui nỗi buồn trong cuộc sống. Có đôi khi bạn biết rằng việc đó sẽ gây đau đớn cho mình nhưng bạn vẫn dấn thân và xem nó như một phần thiết yếu của cuộc sống.\nTâm thế này tạo cho bạn sự dũng cảm và khí chất vượt trội hơn những người khác. Nhờ vậy bạn sẽ nổi bật và được biết đến nhiều hơn, đặc biệt là khi bạn sống hay làm việc trong một tập thể. ";
      case 60:
        return "Page of Swords là lá bài chỉ rõ về người cộng sự bạn đang hợp tác hoặc sắp làm việc chung trong tương lai. Đây là một “gen z” chính hiệu có lối suy nghĩ độc đáo nhưng không kém phần bốc đồng và ngạo mạn.\nBạn rất có thể sẽ xung đột hay mâu thuẫn với người này trong công việc, nhất là lúc bàn luận về các ý tưởng mới. Tuy nhiên, với tư cách là tiền bối, hãy cho phép bản thân nghỉ ngơi và tiếp nhận ý kiến hay của đồng nghiệp, đồng thời kiên nhẫn khuyên nhủ họ.";
      case 61:
        return "Knight of Swords cho thấy năng lượng dồi dào của bạn trong dự án mới. Công việc này có khởi đầu khá suôn sẻ và ở ra cho bạn nhiều cơ hội. Thời gian này bạn luôn nhiệt huyết và có mục tiêu chinh phục thành công cao nhất của dự án này.";
      case 62:
        return "Queen of Swords cho bạn lời khuyên quan trọng rằng hãy độc lập trong suy nghĩ và tự thân giải quyết vấn đề của mình. Bởi bạn có đủ bản lĩnh và tài năng trời phú để đánh giá, chọn lọc thông tin có lợi trong quá trình quyết định. ";
      case 63:
        return "King of Swords khẳng định rằng đã đến lúc bạn thể hiện vai trò đứng đầu của mình. Hãy thật nghiêm khắc nhưng công tư phân minh, cực kỳ công bằng để có được sự tin tưởng của cộng sự. ";
      case 64:
        return "Ace of Wands là lá bài Tarot khiến bạn phải hành động nhiều hơn. Nó ẩn chứa ý nghĩa khiến bạn luôn nhiệt tình và hồ hởi trước công việc hay dự án mới. Có thể nói, Ace of Wands có tác dụng “boost” tinh thần rất hiệu quả.";
      case 65:
        return "Two of Wands cho thấy rằng bạn đang bắt đầu hoạch định mục tiêu dài hạn và muốn thực hiện chúng ngay từ bây giờ. Dường như bạn đang muốn lập lại trật tự cuộc sống và chinh phục những đỉnh cao vượt trội hơn. Trong trường hợp này, lá bài dự đoán có thể bạn sẽ thôi việc và tự mình kinh doanh hoặc làm cho một nơi khác vững chắc hơn.";
      case 66:
        return "Bạn là một người thích tìm tòi và khám phá những kiến thức mới, vậy hãy xem Three of Wands nói gì với bạn nhé. Lá bài chỉ ra rằng bạn hãy tận dụng cơ hội để tham gia một chuyến du lịch, khó tu nghiệp, du học, công tác,… để tiếp thu những kiến thức mới mẻ hơn theo đúng mong muốn bản thân.";
      case 67:
        return "Four of Wands là lá bài Tarot liên quan mật thiết đến sự đổi mới trong môi trường sống, cụ thể là nhà ở. Four of Wands nói rằng dường như bạn sắp đổi nơi ở và cần trang hoàng lại không gian để phù hợp với sở thích của bản thân. ";
      case 68:
        return "Nếu bạn gặp phải lá bài Five of Wands, điều này chứng tỏ bạn đang có một đối thủ ngang tài ngang sức. Cả hai đều có kinh nghiệm như nhau nhưng bạn đã có thành công riêng. Tuy nhiên, bạn vẫn có thể cạnh tranh với người kia để tăng thêm tính hấp dẫn cho cuộc sống. ";
      case 69:
        return "Six of Wands sẽ là món quà quý giá dành cho những ai thường không biết giá trị của bản thân. Lá bài khuyên rằng bạn nên suy nghĩ tích cực hơn, tự tin và biết được những gì mình làm được trong quá khứ đều xứng đáng được coi trọng. ";
      case 70:
        return "Lá Seven of Wands trong bộ bài Tarot mách bạn không nên ngủ quên trong chiến thắng. Chúng ta cần phải tiếp tục phấn đấu, cố gắng để giữ được vị trí mà mình đã đạt được. Bên cạnh đó, đừng quên bạn luôn có những đối thủ nặng ký sẵn sàng thách đấu. ";
      case 71:
        return "Eight of Wands là lá bài thể hiện rằng bạn hãy tiến về phía trước và hoàn thành các mục tiêu đã được giao. Bên cạnh đó, dường như bạn cũng đang mong đợi tìm kiếm thứ gì đó thú vị và mới mẻ hơn. ";
      case 72:
        return "Nếu bạn đang mệt mỏi trong công việc và gặp lá bài Nine of Wands, đây là một điều vô cùng may mắn. Bởi ý nghĩa lá bài này nói rằng dù bạn gặp nhiều thách thức trong quá trình triển khai công việc, nhưng chỉ cần kiên trì thêm tí nữa thì chắc chắn bạn sẽ vượt qua được và gặt hái thành công. ";
      case 73:
        return "Ten of Wands một mặt thể hiện bạn là người rất giữ chữ tín và có tinh thần trách nhiệm cao. Mặt khác, lá bài cũng muốn nhắc nhở bạn dù có đạt được thỏa thuận với ai cũng phải tuân theo quy tắc đến cùng, không được lơ là, chủ quan để rồi bỏ lỡ cơ hội hợp tác lâu dài. ";
      case 74:
        return "Page of Wands ngụ ý rằng sự nhiệt tình là con dao hai lưỡi có những ảnh hưởng nhất định đến cuộc sống của bạn. Hãy nồng nhiệt một cách vừa phải, tinh tế để không khiến người khác khó chịu mà vẫn xây dựng được mối quan hệ tốt đẹp với mọi người. ";
      case 75:
        return "Knight of Wands mang đến một sự “vạch tội nhẹ nhàng” giành cho những người hay có tính vấp tấp, vội vàng. Họ thường ít hoặc thậm chí là không suy nghĩ trước khi hành động. Kiểu người “làm trước tính sau” này sẽ có lúc bùng nổ với sự nhiệt tình nhưng kết thúc bằng hậu quả bất lợi cho bản thân. ";
      case 76:
        return "Queen of Wands muốn nói với bạn rằng hãy tự tin thể hiện khả năng mình sở hữu. Vốn dĩ bạn đã là một người vô cùng sáng tạo, tài năng và có định hướng rõ ràng cho bản thân. Vậy tại sao không để mọi người biết được thực lực của mình và phát huy nó nhằm thăng tiến cao hơn trong sự nghiệp. ";
      case 77:
        return "King of Wands giống như một lời khen ngợi đầy hoa mỹ cho người xem. Rõ ràng lá bài thể hiện bạn là người quyết đoán và có mục tiêu rõ ràng. Những gì bạn muốn thì nhất định phải cố gắng đạt được. Bạn cũng không lãng phí thời gian vào những hoạt động hay mối quan hệ tạm thời.";
      case 78:
        return " ";
      default:
        return "";
    }
  };

  const PleaseCard = () => {
    const randomCard = Math.floor(Math.random() * (77 - 1 + 1)) + 1;
    setIsFirst(false);
    setCard(undefined);
    setIsLoad(true);
    setTimeout(() => {
      setIsLoad(false);
      setCard(randomCard);
    }, 5000);
  };

  return (
    <SafeAreaView style={theme.container}>
      <Toolbar title={"Bói bài hàng ngày"} />
      <ScrollView style={styles.content}>
        {!card && (
          <Text style={styles.textMeaning}>
            Thành tâm xin lá bài về sức khỏe, công việc, tình yêu,... trong 24
            giờ tới:{" "}
          </Text>
        )}
        {isLoad && (
          <View style={styles.viewNonCardImage}>
            <Image source={require("../../assets/gif/tarot02.gif")} />
          </View>
        )}

        {card && (
          <>
            <View style={styles.viewNonCardImage}>
              <ImageViewer
                style={{ height: 200, width: "100%" }}
                imageUrls={[
                  {
                    url: `data:image/png;base64,${diplayImageCard()}`,
                  },
                ]}
                backgroundColor={colors.white}
                //@ts-ignore
                renderIndicator={() => null}
              />
            </View>
            <Text style={[styles.textMeaning, { color: colors.primary }]}>
              Lá bài hôm nay của bạn: {getZodiacMeaningLabel()}
            </Text>
            <Text style={styles.textMeaning}>
              Ý nghĩa lá bài về sức khỏe, công việc, tình yêu,... trong 24 giờ
              tới:{" "}
            </Text>
            <Text style={styles.textMeaningData}>{getZodiacMeaning()}</Text>
          </>
        )}
      </ScrollView>
      {!isFirst ? (
        <Pressable onPress={PleaseCard}>
          <Text style={styles.viewButReload}>Thành tâm xin lại</Text>
        </Pressable>
      ) : (
        <Pressable onPress={PleaseCard}>
          <Text style={styles.viewBut}>Xin thành tâm</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginHorizontal: 12,
    marginVertical: 10,
  },
  textMeaning: {
    fontSize: 16,
    paddingBottom: 12,
    fontWeight: "bold",
  },
  textMeaningData: {
    fontSize: 16,
  },
  viewBut: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 6,
    textAlign: "center",
    color: colors.white,
  },
  viewButReload: {
    backgroundColor: colors._EAA300,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 6,
    textAlign: "center",
    color: colors.white,
  },
  viewNonCardImage: {
    alignItems: "center",
    paddingVertical: 10,
  },
});

export { Cartomancy };
