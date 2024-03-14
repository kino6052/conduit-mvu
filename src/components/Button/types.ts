export enum EButtonVariant {
  Warning = "warning",
  Primary = "primary",
  Secondary = "secondary",
}

export enum EButtonSize {
  Large = "large",
  Small = "small",
}

export type TButtonConfigProps = {
  variant: EButtonVariant;
  size: EButtonSize;
  className: string;
};

export type TButtonContentProps = {
  text: string;
  hasIcon?: boolean;
  id?: string;
};

export type TButtonProps = Partial<TButtonConfigProps> & TButtonContentProps;