import AdminNavigation from "../../../commons/layout/navigation/admin/AdminNavigation.container";
import { Inner } from "../../../../commons/styles/common";
import * as AI from "./AdminInquiry.styles";

const AdminInquiryUI = (props: any) => {
  return (
    <>
      <AI.Wrapper>
        <AdminNavigation />
        <AI.AdminContentsWrap>
          <Inner>
            <AI.AdminInquirySection>
              <AI.SectionTitle>파트너 문의 리스트</AI.SectionTitle>
              <AI.CompanyInquiry>
                {props.data?.map((el, index) => (
                  <li key={index}>
                    <div>
                      <AI.CompanyName>{el.companyName}</AI.CompanyName>
                      <AI.InquiryContents>
                        <h2>{el.name}</h2>
                        <p>{el.jobtitle}</p>
                        <p>{el.contact}</p>
                        <p>{el.email}</p>
                        <AI.CompanyAsk>{el.contents}</AI.CompanyAsk>
                        <AI.ReplyBtn>답장하기</AI.ReplyBtn>
                      </AI.InquiryContents>
                    </div>
                  </li>
                ))}

                {/* <li>
                  <div>
                    <AI.CompanyName>스포애니 구로디지털단지점</AI.CompanyName>
                    <AI.InquiryContents>
                      <AI.CompanyAsk>
                        파트너 문의드립니다. 지속적인 회원 유치를 위해 알아보다
                        PairingMate를 알게 되었습니다. 파트너쉽 계약 가격과
                        Premium Best Deal 광고 가격 문의 드립니다. 빠른 연락
                        부탁드려요
                      </AI.CompanyAsk>
                      <AI.ReplyBtn>상세보기</AI.ReplyBtn>
                    </AI.InquiryContents>
                  </div>
                </li>

                <li>
                  <div>
                    <AI.CompanyName>스포애니 구로디지털단지점</AI.CompanyName>
                    <AI.InquiryContents>
                      <AI.CompanyAsk>
                        파트너 문의드립니다. 지속적인 회원 유치를 위해 알아보다
                        PairingMate를 알게 되었습니다. 파트너쉽 계약 가격과
                        Premium Best Deal 광고 가격 문의 드립니다. 빠른 연락
                        부탁드려요
                      </AI.CompanyAsk>
                      <AI.ReplyBtn>상세보기</AI.ReplyBtn>
                    </AI.InquiryContents>
                  </div>
                </li> */}
              </AI.CompanyInquiry>
            </AI.AdminInquirySection>

            <AI.AdminInquirySection>
              <AI.SectionTitle>유저 신고 리스트</AI.SectionTitle>
              <AI.UserReport>
                <li>
                  <div>
                    <AI.UserName>PairingMate</AI.UserName>
                    <AI.ReportedUser>자만추</AI.ReportedUser>
                    <AI.UserContents>
                      이 분이랑 만나서 운동했는데 자꾸 이상한 말만하고 원래
                      가자고 했던곳이 아니라 다른곳을 가자고 합니다
                    </AI.UserContents>
                  </div>
                </li>
              </AI.UserReport>
            </AI.AdminInquirySection>

            <AI.AdminInquirySection>
              <AI.SectionTitle>FAQ 리스트</AI.SectionTitle>
              <AI.FAQList>
                <li>
                  <div>
                    <AI.FAQTitle>유저 신고 조치가 궁금합니다</AI.FAQTitle>
                    <AI.FAQContents>
                      유저 신고가 3회 이상 지속되는 경우 유저 강퇴조치가
                      이루어집니다.
                    </AI.FAQContents>
                    <button>수정하기</button>
                    <button>삭제하기</button>
                  </div>
                </li>

                <li>
                  <div>
                    <AI.FAQTitle>유저 신고 조치가 궁금합니다</AI.FAQTitle>
                    <AI.FAQContents>
                      유저 신고가 3회 이상 지속되는 경우 유저 강퇴조치가
                      이루어집니다.
                    </AI.FAQContents>
                    <button>수정하기</button>
                    <button>삭제하기</button>
                  </div>
                </li>

                <li>
                  <div>
                    <AI.FAQTitle>유저 신고 조치가 궁금합니다</AI.FAQTitle>
                    <AI.FAQContents>
                      유저 신고가 3회 이상 지속되는 경우 유저 강퇴조치가
                      이루어집니다.
                    </AI.FAQContents>
                    <button>수정하기</button>
                    <button>삭제하기</button>
                  </div>
                </li>

                <li>
                  <div>
                    <AI.FAQTitle>유저 신고 조치가 궁금합니다</AI.FAQTitle>
                    <AI.FAQContents>
                      유저 신고가 3회 이상 지속되는 경우 유저 강퇴조치가
                      이루어집니다.
                    </AI.FAQContents>
                    <button>수정하기</button>
                    <button>삭제하기</button>
                  </div>
                </li>
              </AI.FAQList>
              <button>작성하기</button>
            </AI.AdminInquirySection>
          </Inner>
        </AI.AdminContentsWrap>
      </AI.Wrapper>
    </>
  );
};

export default AdminInquiryUI;
