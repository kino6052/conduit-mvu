import { EPage } from "../../io/ui/view/types";
import { IEvent } from "../../utils/events";
import { AppState } from "../data/app";
import { ArticleDatabase } from "../data/article";
import { updatePage } from "../utils/utils";

export class ArticleLogic {
  static handleArticleClick(event: IEvent) {
    // TODO: Move into "article handlers"
    const id = event.id;

    if (!id) {
      console.error("Item doesn't have an id");
      return;
    }

    AppState.selectedArticleId = id;
    updatePage(EPage.Article); // TODO: Change AppState instead
  }

  static handleArticleLike(event: IEvent) {
    const id = event.id;

    if (!id) return;

    const username = AppState.currentUserId;

    if (!username) {
      AppState.currentPage = EPage.SignIn;
      updatePage();
      return;
    }

    ArticleDatabase.likeArticleById(id, username);
    updatePage();
  }
}
