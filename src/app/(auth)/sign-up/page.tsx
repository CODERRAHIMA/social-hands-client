// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   HeartHandshake,
//   Sprout,
//   UsersRound,
// } from "lucide-react"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
// import { Input } from "@/components/ui/input"
// import { authClient } from "@/lib/auth-client"; 
// import { redirect } from "next/navigation"

// export default function SignUpPage() {
//   const [showPassword, setShowPassword] = useState(false)

//   const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()

//     const formData = new FormData(e.currentTarget);
    
//     if(!formData.get("image")) {
//         formData.set("image", "/defaultImg.jpg")
//     }

//     const password = String(formData.get("password") ?? "")
//     const unmetRequirements: string[] = []

//     if (!/[A-Z]/.test(password)) {
//       unmetRequirements.push("At least one uppercase letter")
//     }
//     if (!/[a-z]/.test(password)) {
//       unmetRequirements.push("At least one lowercase letter")
//     }
//     if (password.length < 6) {
//       unmetRequirements.push("At least 6 characters")
//     }

//     if (unmetRequirements.length > 0) {
//       window.alert(
//         `Password requirements not met:\n\n${unmetRequirements.join("\n")}`,
//       )
//     }

//     const user = Object.fromEntries(formData.entries()) as {
//       name: string
//       email: string
//       image: string
//       password: string
//     };

//     const {data, error} = await authClient.signUp.email({
//         ...user,
//     })

//     if(data){
//         redirect("/");
//     } else {
//         console.log(error);
//     }
//   }

//   return (
//     <section className="relative isolate overflow-hidden bg-[#F9F9F2] px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-32 top-28 -z-10 size-80 rounded-full bg-[#647F52]/10 blur-3xl"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-32 bottom-8 -z-10 size-96 rounded-full bg-[#D9CBA7]/25 blur-3xl"
//       />

//       <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-[#42512C]/10 bg-white shadow-[0_28px_90px_-40px_rgba(37,49,29,0.35)] lg:grid-cols-[1.05fr_0.95fr]">
//         <aside className="relative flex min-h-[330px] flex-col justify-between overflow-hidden bg-[#344223] p-8 text-white sm:p-10 lg:min-h-[680px] lg:p-12">
//           <Image
//             src="/bannerImg.jpg"
//             alt=""
//             fill
//             sizes="(min-width: 1024px) 50vw, 100vw"
//             className="object-cover"
//           />
//           <div
//             aria-hidden="true"
//             className="absolute inset-0 bg-gradient-to-br from-[#182316]/90 via-[#344223]/80 to-[#42512C]/75"
//           />
//           <div
//             aria-hidden="true"
//             className="absolute -right-24 -top-24 size-72 rounded-full border border-white/10"
//           />
//           <div
//             aria-hidden="true"
//             className="absolute -right-12 -top-12 size-48 rounded-full border border-white/10"
//           />

//           <div className="relative z-10">
//             <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold tracking-wide text-white/90 backdrop-blur-sm">
//               <Sprout size={16} aria-hidden="true" className="text-lime-200" />
//               A COMMUNITY THAT CARES
//             </div>
//             <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-lime-200">
//               Small acts. Stronger communities.
//             </p>
//             <h1 className="max-w-lg text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
//               Make room for
//               <br />
//               a little more good.
//             </h1>
//             <p className="mt-5 max-w-md text-base leading-7 text-white/80 sm:text-lg">
//               Find your people, share your time, and help make a difference
//               right where you live.
//             </p>
//           </div>

//           <div className="relative z-10 mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
//             <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
//               <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-lime-200/15 text-lime-200">
//                 <HeartHandshake size={20} aria-hidden="true" />
//               </span>
//               <div>
//                 <p className="font-semibold">Show up for what matters</p>
//                 <p className="mt-0.5 text-sm text-white/70">
//                   Turn a little time into real impact.
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
//               <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-lime-200/15 text-lime-200">
//                 <UsersRound size={20} aria-hidden="true" />
//               </span>
//               <div>
//                 <p className="font-semibold">Better, together</p>
//                 <p className="mt-0.5 text-sm text-white/70">
//                   Meet neighbors who care like you do.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </aside>

//         <div className="flex items-center justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
//           <div className="w-full max-w-md">
//             <div className="mb-8">
//               <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#647F52]">
//                 Your next good thing starts here
//               </p>
//               <h2 className="text-3xl font-extrabold tracking-tight text-[#1C2012] sm:text-4xl">
//                 Create your account
//               </h2>
//               <p className="mt-3 text-base leading-7 text-[#64695D]">
//                 Join SocialHands and find meaningful ways to get involved.
//               </p>
//             </div>

//             <form onSubmit={handleSignUp}>
//               <FieldGroup className="gap-5">
//                 <Field>
//                   <FieldLabel
//                     htmlFor="name"
//                     className="text-sm font-semibold text-[#343A2D]"
//                   >
//                     Full name
//                   </FieldLabel>
//                   <Input
//                     id="name"
//                     name="name"
//                     type="text"
//                     autoComplete="name"
//                     placeholder="Your name"
//                     required
//                     className="h-12 rounded-xl border-[#DDE0D5] bg-[#FDFCFA] px-4 placeholder:text-[#92968B] focus-visible:border-[#647F52] focus-visible:ring-[#647F52]/20"
//                   />
//                 </Field>
//                 <Field>
//                   <FieldLabel
//                     htmlFor="email"
//                     className="text-sm font-semibold text-[#343A2D]"
//                   >
//                     Email address
//                   </FieldLabel>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     placeholder="you@example.com"
//                     required
//                     className="h-12 rounded-xl border-[#DDE0D5] bg-[#FDFCFA] px-4 placeholder:text-[#92968B] focus-visible:border-[#647F52] focus-visible:ring-[#647F52]/20"
//                   />
//                 </Field>
//                 <Field>
//                   <FieldLabel
//                     htmlFor="image"
//                     className="text-sm font-semibold text-[#343A2D]"
//                   >
//                     Profile image URL
//                   </FieldLabel>
//                   <Input
//                     id="image"
//                     name="image"
//                     type="url"
//                     autoComplete="url"
//                     placeholder="https://unsplash.com/..."
//                     className="h-12 rounded-xl border-[#DDE0D5] bg-[#FDFCFA] px-4 placeholder:text-[#92968B] focus-visible:border-[#647F52] focus-visible:ring-[#647F52]/20"
//                   />
//                   <p className="text-xs leading-5 text-[#858A7D]">
//                     Optional: Leave empty for default avatar
//                   </p>
//                 </Field>
//                 <Field>
//                   <FieldLabel
//                     htmlFor="password"
//                     className="text-sm font-semibold text-[#343A2D]"
//                   >
//                     Password
//                   </FieldLabel>
//                   <div className="relative">
//                     <Input
//                       id="password"
//                       name="password"
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="new-password"
//                       placeholder="Create a password"
//                       required
//                       className="h-12 rounded-xl border-[#DDE0D5] bg-[#FDFCFA] px-4 pr-12 placeholder:text-[#92968B] focus-visible:border-[#647F52] focus-visible:ring-[#647F52]/20"
//                     />
//                     <button
//                       type="button"
//                       aria-label={showPassword ? "Hide password" : "Show password"}
//                       aria-pressed={showPassword}
//                       onClick={() => setShowPassword((visible) => !visible)}
//                       className="absolute inset-y-0 right-0 flex w-12 items-center justify-center rounded-r-xl text-[#777D70] transition-colors hover:text-[#42512C] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-[#647F52]/30"
//                     >
//                       {showPassword ? (
//                         <EyeOff size={18} aria-hidden="true" />
//                       ) : (
//                         <Eye size={18} aria-hidden="true" />
//                       )}
//                     </button>
//                   </div>
//                   <p className="text-xs leading-5 text-[#858A7D]">
//                     Include an uppercase letter, a lowercase letter, and at
//                     least 6 characters.
//                   </p>
//                 </Field>
//                 <Field className="pt-1">
//                   <Button
//                     type="submit"
//                     className="h-12 w-full rounded-xl bg-[#42512C] text-sm font-bold text-white shadow-lg shadow-[#42512C]/20 hover:bg-[#344223]"
//                   >
//                     Create account
//                     <ArrowRight size={17} aria-hidden="true" />
//                   </Button>
//                 </Field>
//               </FieldGroup>
//             </form>

//             <p className="mt-7 text-center text-sm text-[#64695D]">
//               Already part of the community?{" "}
//               <Link
//                 href="/sign-in"
//                 className="font-bold text-[#42512C] underline-offset-4 transition-colors hover:text-[#647F52] hover:underline"
//               >
//                 Sign in
//               </Link>
//             </p>
//             <p className="mt-8 border-t border-[#E8E9E1] pt-5 text-center text-xs leading-5 text-[#858A7D]">
//               By creating an account, you’re taking the first step toward
//               making a difference in your community.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
