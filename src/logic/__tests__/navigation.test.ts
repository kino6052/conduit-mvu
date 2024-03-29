import { update } from "..";
import { ETabConstant } from "../../components/Tab/constants";
import { DefaultAppProps } from "../../data";
import { EPage } from "../../types";

describe("Navigation", () => {
  it("should visit sign in page when clicked ", async () => {
    const result = await update(
      { slug: ETabConstant.Slug, id: EPage.SignIn, type: "onClick" },
      DefaultAppProps,
    );

    expect(result).toMatchInlineSnapshot(`
{
  "navbarProps": {
    "tabs": [
      {
        "id": "Home",
        "text": "Home",
        "variant": "menu",
      },
      {
        "id": "SignIn",
        "text": "Sign In",
        "variant": "menu",
      },
      {
        "id": "SignUp",
        "text": "Sign Up",
        "variant": "menu",
      },
    ],
  },
  "page": "SignIn",
  "pageProps": {
    "buttonProps": {
      "id": "SignInPageSubmitButtonId",
      "text": "Submit",
    },
    "linkProps": {
      "id": "SignInPageDocumentationLinkId",
    },
    "passwordInputProps": {
      "error": "",
      "id": "SignInPagePasswordInputId",
      "placeholder": "Password",
      "value": "",
    },
    "usernameInputProps": {
      "error": "",
      "id": "SignInPageUserNameInputId",
      "placeholder": "Username",
      "value": "",
    },
  },
}
`);
  });

  it("should visit settings page when clicked ", async () => {
    const result = await update(
      { slug: ETabConstant.Slug, id: EPage.SignUp, type: "onClick" },
      DefaultAppProps,
    );

    expect(result).toMatchInlineSnapshot(`
{
  "navbarProps": {
    "tabs": [
      {
        "id": "Home",
        "text": "Home",
        "variant": "menu",
      },
      {
        "id": "SignIn",
        "text": "Sign In",
        "variant": "menu",
      },
      {
        "id": "SignUp",
        "text": "Sign Up",
        "variant": "menu",
      },
    ],
  },
  "page": "SignUp",
  "pageProps": {
    "buttonProps": {
      "id": "SignUpPageSubmitButtonId",
      "text": "Submit",
    },
    "passwordInputProps": {
      "id": "SignUpPagePasswordInputId",
      "placeholder": "Password",
      "value": "",
    },
    "usernameInputProps": {
      "id": "SignUpPageUserNameInputId",
      "placeholder": "Username",
      "value": "",
    },
  },
}
`);
  });

  it("should visit settings page when clicked ", async () => {
    const result = await update(
      { slug: ETabConstant.Slug, id: EPage.Settings, type: "onClick" },
      DefaultAppProps,
    );

    expect(result).toMatchInlineSnapshot(`
{
  "navbarProps": {
    "tabs": [
      {
        "id": "Home",
        "text": "Home",
        "variant": "menu",
      },
      {
        "id": "SignIn",
        "text": "Sign In",
        "variant": "menu",
      },
      {
        "id": "SignUp",
        "text": "Sign Up",
        "variant": "menu",
      },
    ],
  },
  "page": "Settings",
  "pageProps": {
    "bioInputProps": {
      "id": "BioInputId",
      "placeholder": "Short bio",
      "value": "",
    },
    "buttonProps": {
      "id": "SettingsPageSubmitButtonId",
      "text": "Submit",
    },
    "imageUrlInputProps": {
      "id": "SettingsPageImageURLInputId",
      "placeholder": "Image URL",
      "value": "",
    },
    "logoutButtonProps": {
      "id": "SettingsPageLogoutButtonId",
      "text": "Log out",
    },
    "passwordInputProps": {
      "id": "SettingsPagePasswordInputId",
      "placeholder": "Password",
      "value": "",
    },
    "usernameInputProps": {
      "id": "SettingsPageUserNameInputId",
      "placeholder": "Username",
      "value": "",
    },
  },
}
`);
  });
});