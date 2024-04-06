import { EPage, TAppProps } from "../types";
import { IEvent } from "../utils/events";
import {
  IncomingEventSubject,
  ResultingStateSubject,
} from "./navbar/common.logic";

import "./editArticle";
import "./home";
import "./navbar.logic";
import "./articlePage";
import "./settings";
import "./profile";
import "./signIn";
import "./signUp";
import "./userInfo";
import "./article";
import "./tabs";

export const update = async (
  event: IEvent,
  state: TAppProps<EPage>,
): Promise<TAppProps<EPage>> => {
  IncomingEventSubject.next(event);
  const nextState = ResultingStateSubject.getValue();
  return nextState;
};

export const sequence = async (events: IEvent[], state: TAppProps<EPage>) => {
  let result = state;

  for (let index = 0; index < events.length; index++) {
    const event = events[index];
    result = await update(event, result);
  }

  return result;
};
