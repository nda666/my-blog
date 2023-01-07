export type LoginForm = {
  email: string;
  password: string;
  redirectTo?: string;
  remember?: boolean;
};

export type RegisterForm = {
  email: string;
  password: string;
};

export type TagPostType = {
  id: null | string;
  name: string;
};

export type PostCategoryType = {
  id: string | null;
  name: string;
};

export type PostFormType = {
  title: string;
  content: string;
  slug?: string;
  userId: string;
  category: PostCategoryType;
  tags?: TagPostType[];
};

export type TagFormType = {
  name: string;
  slug?: string;
};

export type CategoryFormType = {
  name: string;
  slug?: string;
};

export type PostFormUserType = {
  id: string;
};

export type AccountFormType = {
  id: string;
  email: string;
  password?: string;
  passwordConfirm?: string;
};
