import { uniqueId } from "lodash";
import { ArticleDAOTestDouble } from "./data/ArticleDAO";
import { UserDAOTestDouble } from "./data/UserDAO";
import { ArticlePage } from "./pages/ArticlePage";
import { HomePage } from "./pages/ArticlePreviewPage/HomePage";
import { ProfilePage } from "./pages/ArticlePreviewPage/ProfilePage";
import { EditArticlePage } from "./pages/EditArticlePage";
import { NewArticlePage } from "./pages/NewArticlePage";
import { SettingsPage } from "./pages/SettingsPage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { EPage } from "./pages/types";
import { SimpleArticleService } from "./services/ArticleService/implementations/SimpleArticleService";
import { SimpleNavigationService } from "./services/NavigationService/implementations/SimpleNavigationService";
import { SimpleUserService } from "./services/UserService/implementations/SimpleUserService";
import { ViewModel } from "./view-model";
import { IViewModel, TPropsMap } from "./view-model/types";


/** To be used only in the entry point of the application as
 * this is the ultimate detail (i.e. the dirtiest part) */
export const defaultComposeApp = (propsMap: TPropsMap): IViewModel => {
  const articleDao = new ArticleDAOTestDouble(
    () => new Date(0).toISOString(),
    () => uniqueId("post"),
  );

  const userDao = new UserDAOTestDouble();
  const navigationService = new SimpleNavigationService({});
  const userService = new SimpleUserService(userDao, navigationService);

  const articleService = new SimpleArticleService(
    articleDao,
    navigationService,
    userService,
  );

  navigationService.constructors = {
    [EPage.Home]: () => HomePage.create(articleService, navigationService),
    [EPage.Profile]: (username: string) =>
      ProfilePage.create(
        username,
        articleService,
        navigationService,
        userService,
      ),
    [EPage.Article]: (articleId: string) =>
      ArticlePage.create(articleId, articleService, navigationService),
    [EPage.EditArticle]: (articleId: string) =>
      EditArticlePage.create(articleId, articleService, navigationService),
    [EPage.NewArticle]: () =>
      NewArticlePage.create("", articleService, navigationService),
    [EPage.Settings]: () => SettingsPage.create(userService, navigationService),
    [EPage.SignIn]: async () => new SignInPage(userService, navigationService),
    [EPage.SignUp]: async () => new SignUpPage(userService, navigationService),
  };

  const viewModel = new ViewModel(propsMap, navigationService);

  navigationService.navigate(EPage.Home).then(() => {
    viewModel.refresh();
  });

  return viewModel;
};
