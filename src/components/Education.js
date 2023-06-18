// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import StepContent from '@mui/material/StepContent';
// import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import React from 'react';
// const steps = [
//     {
//       label: 'Select campaign settings',
//       description: `For each ad campaign that you create, you can control how much
//                 you're willing to spend on clicks and conversions, which networks
//                 and geographical locations you want your ads to show on, and more.`,
//     },
//     {
//       label: 'Create an ad group',
//       description:
//         'An ad group contains one or more ads which target a shared set of keywords.',
//     },
//     {
//       label: 'Create an ad',
//       description: `Try out different ad text to see what brings in the most customers,
//                 and learn how to enhance your ads using features like ad extensions.
//                 If you run into any problems with your ads, find out how to tell if
//                 they're running and how to resolve approval issues.`,
//     },
//   ];

// export const  Education = () => {
//     const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <div id="education">
//         <ul
//   class="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
//   data-te-stepper-init
//   data-te-stepper-type="vertical">
  
//   <li
//     data-te-stepper-step-ref
//     class="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
//     <div
//       data-te-stepper-head-ref
//       class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
//       <span
//         data-te-stepper-head-icon-ref
//         class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
//         1
//       </span>
//       <span
//         data-te-stepper-head-text-ref
//         class="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
//         step1
//       </span>
//     </div>
//     <div
//       data-te-stepper-content-ref
//       class="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 ps-1 duration-300 ease-in-out">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//       eiusmod tempor incididunt ut labore et dolore magna aliqua.
//     </div>
//   </li>

  
//   <li
//     data-te-stepper-step-ref
//     class="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
//     <div
//       data-te-stepper-head-ref
//       class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
//       <span
//         data-te-stepper-head-icon-ref
//         class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
//         2
//       </span>
//       <span
//         data-te-stepper-head-text-ref
//         class="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
//         step2
//       </span>
//     </div>
//     <div
//       data-te-stepper-content-ref
//       class="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 ps-1 duration-300 ease-in-out">
//       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
//       nisi ut aliquip ex ea commodo consequat.
//     </div>
//   </li>

  
//   <li data-te-stepper-step-ref class="relative h-fit">
//     <div
//       data-te-stepper-head-ref
//       class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
//       <span
//         data-te-stepper-head-icon-ref
//         class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
//         3
//       </span>
//       <span
//         data-te-stepper-head-text-ref
//         class="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
//         step3
//       </span>
//     </div>
//     <div
//       data-te-stepper-content-ref
//       class="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 ps-1 duration-300 ease-in-out">
//       Duis aute irure dolor in reprehenderit in voluptate velit esse
//       cillum dolore eu fugiat nulla pariatur.
//     </div>
//   </li>
// </ul>
      
//     </div>
//   )
// }


