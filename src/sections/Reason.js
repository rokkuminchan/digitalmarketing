import React from "react";
import BlockHeader from "../components/BlockHeader";
import ImageElement from "../components/ImageElement";

const Reason = () => {
  return (
    <React.Fragment>
      <BlockHeader
        heading="Reason"
        subHeading="Lý do để bạn lựa chọn WORLD"
        content="Bạn là kỹ sư IT trẻ trung, năng động và muốn làm việc lâu dài tại Nhật Bản, còn chần chờ gì nữa mà không ứng tuyển ngay vào World."
      />
      <ImageElement
        src="img/avatar-1.png"
        alt="ly do"
        title="Cơ hội làm việc"
        text="Bạn là sinh viên vừa tốt nghiệp và mong muốn được tìm được việc làm sau khi ra trường. Hay bạn là nhân viên IT muốn tìm công việc mới phù hợp chuyên môn và chế độ tốt hơn. World có rất nhiều cơ hội việc làm trên nhiều lĩnh vực để bạn thỏa mãn đam mê sáng tạo và gặt hái thành công. "
      />
    </React.Fragment>
  );
};

export default Reason;
