import { combineLatest, filter, map, tap, switchMap } from "rxjs";
import { ETagConstant } from "../../components/Tag/constants";
import { EPage } from "../../types";
import {
  IncomingEventSubject,
  RefreshSubject,
  refresh,
  propagateState,
} from "../common.logic";
import { AppState } from "../data/app";
import { HomePageLogic } from "./logic";

const HomePageIncomingEventSubject = IncomingEventSubject.pipe(
  filter(() => AppState.currentPage === EPage.Home),
);

combineLatest([
  HomePageIncomingEventSubject.pipe(
    filter((event) => event.slug === ETagConstant.Slug),
    tap(HomePageLogic.selectTag),
  ),
])
  .pipe(tap(refresh))
  .subscribe();

RefreshSubject.pipe(
  filter(() => AppState.currentPage === EPage.Home),
  switchMap(HomePageLogic.update),
  tap(propagateState),
).subscribe();
