import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center mt-48">
        <p className="text-3xl">One Stop Grocer</p>
      </div>
      <div className="flex justify-center">
        <RegisterForm />
      </div>
    </div>
  );
}
