import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};
const ExploreBuddyForm = ({ children, onSubmit }: TFormProps) => {
  const methods = useForm();
  const { reset } = methods;
  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    reset();
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default ExploreBuddyForm;
