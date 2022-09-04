import Input from "../../components/Input";
import Button from "components/Button";
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { setUser } from "../../store/auth";

import { register } from "firebase.js";

import { Formik, Form } from "formik";

import { RegisterSchema } from "validation";
import Separator from "components/Separator";
import { Helmet } from "react-helmet";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values, actions) => {
    const response = await register(values);
    if (response) {
      navigate(location.state?.return_url || "/", {
        replace: true,
      });
    }
  };

  return (
    <>
    <Helmet>
				<title>Register • Instagram</title>
			</Helmet>
      <div className="w-[350px] grid gap-y-2.5">
        <div className="bg-white border px-[40px] pt-10 pb-2 ">
          <a href="#" className="flex justify-center">
            <img
              className="h-[51px] mb-3"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            />
          </a>

          <p className="text-[17px] font-semibold flex items-center justify-center text-center text-[#8E8E8E] mb-[14px]">
            Sign up to see photos and videos from your friends.
          </p>

          <Formik
            validationSchema={RegisterSchema}
            initialValues={{
              email: "",
              full_name: "",
              username: "",
              password: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, dirty, values }) => (
              <Form className="grid gap-y-1.5">
                <Button>
                  <AiFillFacebook size={20} />
                  Log in with Facebook
                </Button>

                <Separator className="flex items-center mt-[10px] mb-[10px]" />

                <Input name="email" label="Mobile Number or email" />
                <Input name="full_name" label="Full Name" />
                <Input name="username" label="Username" />
                <Input type="password" name="password" label="Password" />

               <p className="text-xs text-center text-[#8e8e8e] py-2">
               People who use our service may have uploaded your contact information to Instagram. <a href="#" className="font-semibold">Learn More</a>
               <br /><br />
               By signing up, you agree to our <a href="#" className="font-semibold">Terms</a>, <a href="#" className="font-semibold">Privacy Policy</a> and <a href="#" className="font-semibold">Cookies Policy</a>.
               </p>

                <Button
                  type="submit"
                  disabled={!isValid || !dirty || isSubmitting}
                >
                  Sign up
                </Button>
                <div className="mb-4"></div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="bg-white border p-6 text-sm text-center">
          Have an account?{" "}
          <Link to="/auth/login" className="font-semibold text-brand">
            Log in
          </Link>
        </div>
      </div>
    </>
  );
}
