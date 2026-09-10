import { ReactNode } from 'react';
import { Formik, FormikHelpers } from 'formik';
interface Props<T> {
  initialValues: any;
  validationSchema: any;
  onSubmit: ((
    values: T,
    formikHelpers: FormikHelpers<T>,
  ) => void | Promise<any>) &
    ((values: any) => void);
  children: ReactNode;
}

const Form = <T extends Object>(props: Props<T>) => {
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}
      onSubmit={props.onSubmit}
    >
      {props.children}
    </Formik>
  );
};

export default Form;
