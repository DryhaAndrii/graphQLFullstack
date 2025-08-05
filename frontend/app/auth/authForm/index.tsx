"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/app/components/ui/input/input";

const schema = z.object({
  email: z.string().email("Невалидная почта"),
  password: z.string().min(6, "Минимум 6 символов"),
});

type FormData = z.infer<typeof schema>;

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Данные формы:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 mx-auto mt-10 max-w-sm"
    >
      <div>
        <label>Email:</label>
        <Input {...register("email")} />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label>Пароль:</label>
        <Input {...register("password")} type="password"/>
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <button type="submit" className="bg-blue-500 px-4 py-2 text-white">
        Войти
      </button>
    </form>
  );
}
