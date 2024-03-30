import { EButtonConstants } from "../../components/Button/constants";
import { EInputConstants } from "../../components/Input/Input/constants";
import { ETabConstant } from "../../components/Tab/constants";
import { ENewPostPageConstant } from "../../pages/EditArticlePage/constants";
import { EPage } from "../../types";
import { ESignUpConstant } from "../signUp/constants";

export const createUserSequence = [
  { slug: ETabConstant.Slug, id: EPage.SignUp, type: "onClick" },
  {
    slug: EInputConstants.Slug,
    id: ESignUpConstant.UserNameInputId,
    type: "onChange",
    event: {
      target: {
        value: "testset",
      },
    },
  },
  {
    slug: EInputConstants.Slug,
    id: ESignUpConstant.PasswordInputId,
    type: "onChange",
    event: {
      target: {
        value: "testset",
      },
    },
  },
  {
    slug: EInputConstants.Slug,
    id: ESignUpConstant.SubmitButtonId,
    type: "onClick",
  },
];

export const writeArticleSequence = [
  {
    slug: ETabConstant.Slug,
    id: EPage.NewArticle,
    type: "onClick",
  },
  {
    slug: EInputConstants.Slug,
    id: ENewPostPageConstant.TitleInputId,
    type: "onChange",
    event: {
      target: {
        value: "title",
      },
    },
  },
  {
    slug: EInputConstants.Slug,
    id: ENewPostPageConstant.TextInputId,
    type: "onChange",
    event: {
      target: {
        value: "text",
      },
    },
  },
  {
    slug: EButtonConstants.Slug,
    id: ENewPostPageConstant.SubmitButtonId,
    type: "onClick",
  },
];