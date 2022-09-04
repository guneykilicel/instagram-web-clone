import { useEffect, useRef, useState } from "react";
import Input from "../../components/Input";
import Button from "components/Button";
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { setUser } from "../../store/auth";

import { login } from "../../firebase";

import { Formik, Form } from "formik";

import { LoginSchema } from "../../validation";
import Separator from "components/Separator";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";


export default function Login() {

  const user = useSelector(state=>state.auth.user)

  const navigate = useNavigate();
  const location = useLocation();  

  const ref = useRef();
  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
    const imageSlider = () => {
      images[(current > 0 ? current : total) - 1].classList.add("opacity-0");
      images[current].classList.remove("opacity-0");
      current = current === total - 1 ? 0 : current + 1;
    };
    imageSlider();
    let interval = setInterval(imageSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  const images = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png",
  ];

  if(user){
    return <Navigate to={location.state?.return_url || "/"} replace={true} />
  } //giriş yaparken yönlendiriyor

  const handleSubmit = async (values, actions) => {
    await login(values.username, values.password);
  };
  return (
    <>
    <Helmet>
				<title>Login • Instagram</title>
			</Helmet>
      <div className="h-full w-full flex flex-wrap overflow-auto items-center justify-center gap-x-8">
        <div className="hidden md:block relative w-[380px] h-[581px] bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
          <div
            className="w-[250px] h-[538.84px] absolute top-[27px] right-[18px]"
            ref={ref}
          >
            {images.map((image, key) => (
              <img
                key={key}
                className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
                src={image}
              />
            ))}
          </div>
        </div>

        <div className="w-[350px] grid gap-y-2.5">
          <div className="bg-white border px-[40px] pt-10 pb-2 ">
            <div className="flex justify-center">
              <img
                className="h-[51px] mb-8 "
                src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              />
            </div>

            <Formik
              validationSchema={LoginSchema}
              initialValues={{
                username: "",
                password: "",
              }}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, isValid, dirty, values }) => (
                <Form className="grid gap-y-1.5">
                  <Input
                    name="username"
                    label="Phone number, username or email"
                  />
                  <Input type="password" name="password" label="Password" />
                  
                  <Button type="submit" disabled={!isValid || !dirty || isSubmitting}>
                    Log In
                  </Button>
                  
                  <Separator label="OR" />
                  <a
                    href="#"
                    className="flex justify-center items-center gap-x-2 text-sm font-semibold text-facebook"
                  >
                    <AiFillFacebook size={20} />
                    Log in with Facebook
                  </a>
                  <a
                    href="#"
                    className="text-xs flex items-center justify-center text-link mt-3 pb-4"
                  >
                    Forgotten your password?
                  </a>
                </Form>
              )}
            </Formik>
          </div>

          <div className="bg-white border p-4 text-sm text-center">
            Don't have an account?{" "}
            <Link to="/auth/register" className="font-semibold text-brand">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
