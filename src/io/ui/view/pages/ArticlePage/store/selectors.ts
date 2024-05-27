import { ArticlePage } from "../../../../../../model/pages/ArticlePage";
import { EPage, IPage } from "../../../../../../model/pages/types";
import { EButtonVariant } from "../../../components/Button/types";
import { TAppProps } from "../../../types";
import { getAsyncRefresh } from "../../../utils/utils";
import { generateNavBarProps } from "../../selectors";

export const generateArticlePageProps = (
  page: IPage,
  refresh?: () => void,
): TAppProps<EPage.Article> => {
  const _page = page as ArticlePage;

  return {
    navbarProps: generateNavBarProps(_page, refresh),
    page: EPage.Article,
    pageProps: {
      bannerProps: {
        title: _page.article?.articleData.title || "",
        canEdit: !_page.editControl?.isDisabled,
        userInfoProps: {
          date: _page.article?.articleData.date ?? "",
          username: _page.article?.articleData.username ?? "",
          onClick: getAsyncRefresh(async () => _page.article?.read(), refresh),
        },
        editButtonProps: {
          text: "",
          onClick: getAsyncRefresh(
            async () => _page.editControl?.onActivate?.(),
            refresh,
          ),
        },
        deleteButtonProps: {
          text: "",
          onClick: getAsyncRefresh(
            async () => _page.deleteControl?.onActivate?.(),
            refresh,
          ),
        },
      },
      tags: [],
      commentBoxProps: {
        iconProps: {
          icon: "favorite",
        },
        inputProps: {
          onChange: async (e) => {
            _page.comment.value = e.target.value ?? "";
            refresh?.();
          },
          placeholder: "Input",
          value: _page.comment.value,
        },
        buttonProps: {
          text: _page.submitCommentControl?.text ?? "",
          onClick: getAsyncRefresh(
            async () => _page.submitCommentControl?.onActivate?.(),
            refresh,
          ),
          disabled: _page.submitCommentControl?.isDisabled,
        },
      },
      comments:
        _page.article?.articleData.comments.map((comment) => ({
          iconProps: {
            icon: "favorite",
            text: comment?.username,
          },
          inputProps: {
            value: comment.text ?? "",
            disabled: true,
            onChange: async () => {},
            placeholder: "",
          },
          userInfoProps: {
            date: "",
            username: comment.username ?? "",
            onClick: getAsyncRefresh(async () => {}, refresh),
          },
        })) ?? [],
      content: _page.article?.articleData.description ?? "",
      favoriteButtonProps: {
        onClick: getAsyncRefresh(
          async () => _page.article?.likeControl.onActivate?.(),
          refresh,
        ),
        text: _page.article?.likeControl.text ?? "",
        hasIcon: true,
        variant: EButtonVariant.Secondary,
      },
      followButtonProps: {
        onClick: getAsyncRefresh(async () => {}, refresh),
        text: "",
      },
    },
  };
};
