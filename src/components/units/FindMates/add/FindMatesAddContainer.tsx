import FindMatesAddUI from "./FindMatesAddPresenter";
import { FindmatesAddProps, UpdateBoardInput } from "./FindMatesAddTypes";
import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { CREATEBOARD, UPDATE_BOARD, FETCH_BOARD } from "./FindMatesAddQueries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import {
  getCategory,
  getTitle,
} from "../../../../commons/libraries/utils/utils";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../../../../../pages/_app";

const FindMatesAdd = (props: FindmatesAddProps) => {
  const router = useRouter();
  const db = getFirestore(app);
  const [isUpdateTag, setIsUpdateTag] = useState(false);
  const [isUpdateImages, setIsUpdateImages] = useState(false);
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [images, setImages] = useState([]);
  const [boardAddress, setBoardAddress] = useState({
    zipcode: "",
    address: "",
    addressDetail: "",
  });
  const [addFindmate] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATEBOARD);
  const [updateFindmate] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: String(router.query.findmateId) } }
  );

  const onChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickAddFindmate = async () => {
    if (
      category === "" ||
      title === "" ||
      contents === "" ||
      tags.length === 0 ||
      boardAddress.address === ""
    ) {
      Modal.warning({ content: "모든 내용을 작성해주세요" });
      return;
    }
    if (images.length === 0) {
      Modal.warning({ content: "최소 1장의 이미지를 넣어주세요" });
      return;
    }
    try {
      const result = await addFindmate({
        variables: {
          createBoardInput: {
            writer:
              localStorage.getItem("name") +
              "$%$%" +
              localStorage.getItem("image"),
            password: "1234",
            title: category + "$%$%" + title,
            contents,
            images,
            youtubeUrl: tags.join(""),
            boardAddress,
          },
        },
      });

      const docRef = await addDoc(collection(db, "findmatesBoard"), {
        writer: {
          email: localStorage.getItem("email"),
          name: localStorage.getItem("name"),
        },
        boardId: result.data?.createBoard._id,
      });
      router.push(`/find-mates/${result.data.createBoard._id}/`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdateFindmate = async () => {
    const updateBoardInput: UpdateBoardInput = {};
    // 카테고리만 수정 되었을때
    if (category !== "" && title === "")
      updateBoardInput.title =
        category + "$%$%" + getTitle(data?.fetchBoard.title);

    // 제목만 수정 되었을때
    if (title !== "" && category === "")
      updateBoardInput.title =
        getCategory(data?.fetchBoard.title) + "$%$%" + title;

    // 제목 카테고리 둘다 수정 되었을때
    if (category !== "" && title !== "")
      updateBoardInput.title = category + "$%$%" + title;

    if (contents !== "") updateBoardInput.contents = contents;

    if (isUpdateTag) updateBoardInput.youtubeUrl = tags.join("");

    if (isUpdateImages) updateBoardInput.images = images;

    if (boardAddress.address !== "")
      updateBoardInput.boardAddress = boardAddress;

    if (images.length === 0 && isUpdateImages) {
      Modal.warning({ content: "최소 1장의 이미지를 넣어주세요" });
      return;
    }

    try {
      await updateFindmate({
        variables: {
          boardId: String(router.query.findmateId),
          password: "1234",
          updateBoardInput,
        },
      });
      Modal.success({ content: "수정 되었습니다." });
      router.push(`/find-mates/${router.query.findmateId}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <FindMatesAddUI
      tags={tags}
      setTags={setTags}
      setIsUpdateTag={setIsUpdateTag}
      data={data}
      isUpdate={props.isUpdate}
      setImages={setImages}
      setIsUpdateImages={setIsUpdateImages}
      setBoardAddress={setBoardAddress}
      onChangeCategory={onChangeCategory}
      onClickAddFindmate={onClickAddFindmate}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickUpdateFindmate={onClickUpdateFindmate}
    />
  );
};
export default FindMatesAdd;
