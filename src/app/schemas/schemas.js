type Step1FormData = {
  email: string,
  password: string,
};

type Step2FormData = {
  name: string,
  profileImage?: FileList,
};

const Loginschema = yup.object().shape({
  email: yup.string().email("It must be an e-mail").required("Can't be empty"),
  password: yup
    .string()
    .required("Can't be empty")
    .min(8, "Minimum 8 characters")
    .max(20, "Maximum 20 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      "Password must include uppercase, lowercase and number"
    ),
});

const Step2Schema = yup.object().shape({
  name: yup.string().required("Name is required"),
});

export default { Loginschema, Step2Schema };
