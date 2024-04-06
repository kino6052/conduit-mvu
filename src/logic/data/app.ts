import { ETabType } from "../../components/Tabs/constants";
import { EPage } from "../../types";
import { ArticleDatabase } from "./article";

export class AppState {
  static selectedTagId: string | undefined;
  static currentUserId: string | undefined;
  static selectedUserId: string | undefined;
  static selectedArticleId: string | undefined;
  static currentPage: EPage = EPage.Home;
  static currentTab: ETabType = ETabType.Global;

  static getCurrentArticle() {
    const articleId = AppState.selectedArticleId;

    if (!articleId) return;

    return ArticleDatabase.getArticleById(articleId);
  }
}
