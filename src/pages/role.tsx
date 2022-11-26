import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useSession } from "next-auth/react";
import { trpc } from "src/utils/trpc";
import { useRouter } from "next/router";

const roles = [
  {
    name: "Student",
    description:
      "Study courses, add courses to your study list or remove them.",
  },
  {
    name: "Lecturer",
    description: "Create courses, create course notes.",
  },
];

export default function Role() {
  const router = useRouter();

  enum Roles {
    STUDENT = "STUDENT",
    LECTURER = "LECTURER",
  }

  const [selected, setSelected] = useState<Roles | null>(null);
  const { data } = useSession();
  const userId = data?.user?.id;

  const { mutate } = trpc.auth.createRole.useMutation({
    onSuccess: () => {
      console.log("Suceess");
      router.push("/");
    },
    onError: (error) => {
      window.alert(error.message);
    },
  });
  const handleSubmit = () => {
    console.log({selected, userId})
    if (selected && userId) {
      mutate({ role: selected, userId: userId });
    }
  };
  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {roles.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan.name}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                      : ""
                  }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}
                          >
                            <span>{plan.description}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
          {selected ? (
            <>
              {" "}
              <button onClick={handleSubmit}>Select Role</button>
            </>
          ) : null}
        </RadioGroup>
      </div>
    </div>
  );
}
