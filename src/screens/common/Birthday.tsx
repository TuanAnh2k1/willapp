import { welcome } from "@assets";
import { Toolbar } from "@components";
import { useAppSelector } from "@redux";
import { Utility, colors, theme } from "@utils";
import { RefreshControl, ScrollView, Text } from "react-native";
import { FlatList } from "react-native";
import { View } from "react-native";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

const Birthday = () => {

    const birthday = useAppSelector(state => state.app.Birthday);

    const zodiac = Utility.formatDateZodiac(birthday!);
    const chinaZodiac = Utility.formatDateChineseZodiac(birthday!).split(" ")[1];

    // Hàm để lấy ý nghĩa của từng cung hoàng đạo
    const getZodiacMeaning = (zodiacName: string) => {
        switch (zodiacName) {
            case "Bạch Dương":
                return "- Tính cách: Năng động, dũng cảm, nhiệt huyết.\n\n- Đặc điểm tích cực: Lãnh đạo, sáng tạo, quyết đoán.\n\n- Đặc điểm tiêu cực: Hấp tấp, thiếu kiên nhẫn.";
            case "Kim Ngưu":
                return "- Tính cách: Kiên nhẫn, kiên trì, thực tế.\n\n- Đặc điểm tích cực: Ổn định, trung thành, có nghệ sĩ.\n\n- Đặc điểm tiêu cực: Đôi khi cứng đầu, quá cảm thụ vật chất.";
            case "Song Tử":
                return "- Tính cách: Linh hoạt, sáng tạo, thích giao tiếp.\n\n- Đặc điểm tích cực: Tinh tế, thông minh, sáng tạo.\n\n- Đặc điểm tiêu cực: Thiếu kiên nhẫn, không kiên định."
            case "Cự Giải":
                return "- Tính cách: Nhạy cảm, chăm sóc, bảo vệ gia đình.\n\n- Đặc điểm tích cực: Tình cảm, trực giác tốt, sáng tạo.\n\n- Đặc điểm tiêu cực: Nhạy cảm quá mức, ánh đèn mặt trời."
            case "Sư Tử":
                return "- Tính cách: Tự tin, quả cảm, lãnh đạo.\n\n- Đặc điểm tích cực: Quyết đoán, trực giác mạnh, sáng tạo.\n\n- Đặc điểm tiêu cực: Tự cao, ánh đèn sáng."
            case "Xử Nữ":
                return "- Tính cách: Chăm chỉ, chi tiết, hợp tác.\n\n- Đặc điểm tích cực: Thông minh, chín chắn, tổ chức.\n\n- Đặc điểm tiêu cực: Quá phê phán, lo lắng."
            case "Thiên Bình":
                return "- Tính cách: Cân đối, yêu nghệ thuật, công bằng.\n\n- Đặc điểm tích cực: Hài hòa, lãnh đạo tốt, quyết đoán.\n\n- Đặc điểm tiêu cực: Phụ thuộc vào người khác, lưỡng lự."
            case "Bọ Cạp":
                return "- Tính cách: Sâu sắc, quyết đoán, bí ẩn.\n\n- Đặc điểm tích cực: Dũng cảm, quyết tâm, trí tuệ sắc bén.\n\n- Đặc điểm tiêu cực: Ghen tuông, đôi khi ác độc."
            case "Nhân Mã":
                return "- Tính cách: Tự do, lạc quan, trí tò mò.\n\n- Đặc điểm tích cực: Sáng tạo, rộng lượng, yêu thích phiêu lưu.\n\n- Đặc điểm tiêu cực: Thiếu kiên nhẫn, quá mạo hiểm."
            case "Ma Kết":
                return "- Tính cách: Kiên trì, tự chủ, thực tế.\n\n- Đặc điểm tích cực: Tự lập, sáng tạo, có mục tiêu.\n\n- Đặc điểm tiêu cực: Nhìn nhận cuộc sống một cách nghiêm túc."
            case "Bảo Bình":
                return "- Tính cách: Tự do, sáng tạo, tình nhân loại, cá nhân.\n\n- Đặc điểm tích cực: Tư duy sáng tạo, lòng nhân ái, sự độc lập.\n\n- Đặc điểm tiêu cực: Không quan tâm, có thể xa cách."
            case "Song Ngư":
                return "- Tính cách: Nhạy cảm, tâm linh, nhân từ, sáng tạo.\n\n- Đặc điểm tích cực: Tâm linh, lòng nhân ái, tư duy sáng tạo.\n\n- Đặc điểm tiêu cực: Thất thường, thiếu quyết đoán."
            default:
                return "- Không rõ ý nghĩa";
        }
    };

    const getZodiacChinaMeaning = (zodiacChinaName: string) => {
        switch (zodiacChinaName) {
            case "Tý":
                return "- Hợp với: Sửu, Mùi, Dậu\n\n- Xung khắc với: Hợi, Mão";
            case "Sửu":
                return "- Hợp với: Tý, Mùi, Hợi\n\n- Xung khắc với: Dậu, Thìn";
            case "Dần":
                return "- Hợp với: Thân, Mão, Tuất\n\n- Xung khắc với: Tý, Ngọ";
            case "Mão":
                return "- Hợp với: Dần, Thân, Dậu\n\n- Xung khắc với: Hợi, Tý";
            case "Thìn":
                return "- Hợp với: Tỵ, Ngọ, Mùi\n\n- Xung khắc với: Hợi, Mùi";
            case "Tị":
                return "- Hợp với: Thìn, Ngọ, Dậu\n\n- Xung khắc với: Dậu, Sửu";
            case "Ngọ":
                return "- Hợp với: Tỵ, Thìn, Mão\n\n- Xung khắc với: Mùi, Hợi";
            case "Mùi":
                return "- Hợp với: Dậu, Tý, Sửu\n\n- Xung khắc với: Hợi, Ngọ";
            case "Thân":
                return "- Hợp với: Dần, Tuất, Mão\n\n- Xung khắc với: Thìn, Sửu";
            case "Dậu":
                return "- Hợp với: Mão, Thân, Tý\n\n- Xung khắc với: Hợi, Ngọ";
            case "Tuất":
                return "- Hợp với: Dần, Thân, Hợi\n\n- Xung khắc với: Tý, Mão";
            case "Hợi":
                return "- Hợp với: Sửu, Tuất, Dậu\n\n- Xung khắc với: Hợi, Ngọ";
            default:
                return "- Không rõ ý nghĩa";
        }
    };

    const getDigitsFromMeaning = (digitsName: number) => {
        switch (digitsName) {
            case 2:
                return "- Đây là con số đặc biệt và rất hiếm, vì chỉ có duy nhất một số tổng 20 mới cho ra Con số chủ đạo 2. Do đó, trên thực tế những người có Con số chủ đạo 2 ít hơn hẳn so với những Con số chủ đạo khác. Số 2 nhìn chung là người nhạy cảm, khiêm tốn, đầy thiện chí giúp đỡ người khác.";
            case 3:
                return "- Điểm nhấn của những người Số 3 là phần tư duy và lý luận. Đối với những người Số 3, đầu óc nhanh nhạy, tính hài hước và tư duy linh hoạt nói chung giúp họ dễ dàng thành công trong công việc. Nhưng khi sống kém tích cực, người Số 3 dễ để lại ấn tượng là người trịch thượng, gia trưởng hoặc thích chỉ đạo người khác.";
            case 4:
                return "- Người Số 4 có thiên hướng về “thực tế” hoặc “ thực hành” - họ thích bắt tay vào việc hơn là ngồi bàn luận về các giá trị việc đó mang lại. Chính sự thực tế này giúp những người Số 4 luôn tiến về phía trước. Họ thuộc nhóm những người nguyên tắc và đáng tin cậy nhất. Người Số 4 thường chìm đắm trong công việc và xao lãng những việc mang đến sự cân bằng cho cuộc sống của họ, đặc biệt là cuộc sống gia đình.";
            case 5:
                return "- Người có Con số chủ đạo là 5 thường có khuynh hướng cố gắng thoát khỏi sự trói buộc, thường nhạy cảm và có nhu cầu bày tỏ cảm xúc. Phần lớn người Số 5 cảm thấy khó làm việc theo giờ giấc quy định nghiêm ngặt. Họ có trực giác rất tốt, với cảm xúc sâu sắc và tư duy nghệ thuật mạnh mẽ.";
            case 6:
                return "- Chúng ta sẽ thấy người Số 6 ưu tú trong rất nhiều lĩnh vực sáng tạo, từ ở nhà cho đến đấu trường quốc tế. Họ mang một trọng trách lớn trong cuộc sống, thứ đòi hỏi ở họ sự tận tâm sâu sắc. Tất cả những người Số 6 đều có khả năng thiên phú này, nhưng họ thường bị gánh nặng trách nhiệm làm cho bất an và lo lắng, từ đó mắc kẹt trong áp lực căng thẳng.";
            case 7:
                return "- Một trong những đặc điểm độc đáo ở những người Số 7 là họ được học hỏi theo cách riêng của mình. Không dừng lại ở việc tiếp nhận các chỉ dẫn tối thiểu từ người khác, người Số 7 khát khao được học bằng cách tự trải nghiệm. Chính vì điều này, người Số 7 thường phải hy sinh ít nhất một trong ba khía cạnh của cuộc sống: sức khỏe, tình yêu, tiền tài.";
            case 8:
                return "- Những người mang Số 8 chủ đạo là những người coi sự độc lập là một trong những yếu tố quan trọng hàng đầu trong cuộc sống. Họ có thể là những người khá phức tạp, sở hữu cá tính mạnh, sức mạnh và trí tuệ hơn người. Nhưng về khả năng biểu đạt lòng biết ơn và sự trân trọng thì người Số 8 cảm thấy rất khó thể hiện.";
            case 9:
                return "- So với những nhóm khác, người mang Con số chủ đạo 9 sẽ nhân gấp ba lần yếu tố: hoài bão, trách nhiệm và lý tưởng. Họ luôn đặt yếu tố con người lên hàng đầu. Người Số 9 luôn tự cảm thấy mình đầy trách nhiệm. Họ phù hợp với nghệ thuật và các lĩnh vực nhân văn hơn là với khoa học hay thương mại.";
            case 10:
                return "- Cuộc sống của người Số 10 có hai đặc điểm nổi trội: khả năng thích nghi và khả năng thay đổi. Tính linh hoạt của họ có thể hỗ trợ người khác rất nhiều trong việc thích ứng với các thay đổi trong cuộc sống. Khi sống tích cực, họ có thể là người rất quảng giao, được yêu thích; nhưng khi sống tiêu cực, họ có thể là những cá nhân lạc lối, bất an và lao đao trên đường đời.";
            case 11:
                return "- Con số chủ đạo 11 có một trường năng lượng tâm linh đặc biệt mạnh mẽ, giúp những người mang Con số chủ đạo này có tiềm năng phi thường để phát triển nhận thức ở Thể Siêu thức. Đáng tiếc là phần lớn những người Số 11 lại không đủ khả năng phát huy tiềm năng đó.";
            default:
                return "- Không rõ ý nghĩa";
        }
    };

    return (
        <SafeAreaView style={theme.container}>
            <Toolbar
                title={"Xem ý nghĩa ngày sinh"}
            />
            <ScrollView style={styles.scroll}>
                <View style={styles.viewBirth}>
                    <Text style={styles.textBirth}>Ngày sinh -  Dương lịch: </Text>
                    <Text style={styles.textBirthData}>{Utility.formatDateData(birthday!)}</Text>
                </View>
                <View style={styles.viewBirth}>
                    <Text style={styles.textBirth}>Cung hoàng đạo: </Text>
                    <Text style={styles.textBirthData}>{Utility.formatDateZodiac(birthday!)}</Text>
                </View>
                <View style={styles.viewBirth}>
                    <Text style={styles.textBirth}>Ngày sinh -  Âm lịch: </Text>
                    <Text style={styles.textBirthData}>{Utility.formatDateLunerData(birthday!)}</Text>
                </View>
                <View style={styles.viewBirth}>
                    <Text style={styles.textBirth}>Năm tuổi: </Text>
                    <Text style={styles.textBirthData}>{Utility.formatDateChineseZodiac(birthday!)}</Text>
                </View>
                <Text style={styles.textMeaning}>Ý nghĩa cung hoàng đạo: </Text>
                <Text style={styles.textMeaningData}>{getZodiacMeaning(zodiac)}</Text>
                <Text style={styles.textMeaning}>Ý nghĩa tuổi Can Chi: </Text>
                <Text style={styles.textMeaningData}>{getZodiacChinaMeaning(chinaZodiac)}</Text>
                <View style={styles.viewBirth}>
                    <Text style={styles.textBirth}>Con số chủ đạo: </Text>
                    <Text style={styles.textBirthData}>{Utility.sumDigitsFromDate(birthday!)}</Text>
                </View>
                <Text style={styles.textMeaningData}>{getDigitsFromMeaning(Utility.sumDigitsFromDate(birthday!))}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    scroll: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 8
    },
    viewBirth: {
        marginVertical: 4,
        paddingVertical: 4,
        flexDirection: 'row'
    },
    textBirth: {
        fontSize: 16,
        flex: 1,
        fontWeight: 'bold'
    },
    textBirthData: {
        fontSize: 16,
        flex: 1,
    },
    textMeaning: {
        fontSize: 16,
        paddingBottom: 12,
        fontWeight: 'bold',
        paddingTop: 6
    },
    textMeaningData: {
        fontSize: 16,
    }
});

export { Birthday };