import { Link } from "@remix-run/react";
import { Github } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { buttonVariants } from "~/components/ui/button";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function About() {
  return (
    <>
      <h2 className="font-semibold text-2xl pb-2">About Me</h2>
      {
        "My name is Suraj TC, and I am passionate about about leveraging machine learning and data science to tackle real-world problems."
      }
      <h3 className="font-semibold text-xl pb-2 pt-6">Education</h3>
      {
        "With a background in Computer Science and a Master of Professional Studies in Machine Learning from the University of Maryland, I have cultivated a diverse skill set that includes feature engineering, optimization, deep learning, NLP, computer vision, and cloud computing."
      }
      <h3 className="font-semibold text-xl pb-2 pt-6">Academic Research</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            RoBERTa-Based Emotion Classification: Improving Performance on
            Imbalanced Data
          </AccordionTrigger>
          <AccordionContent>
            <span className="block text-right py-2">
              <Link
                to="https://aclanthology.org/2023.wassa-1.46.pdf"
                className={buttonVariants({ variant: "link", size: "sm" })}
              >
                View on ACL
              </Link>
            </span>
            <p>
              Explored RoBERTa's effectiveness for emotion classification in
              essays, overcoming imbalanced dataset challenges. Achieved top
              performance in a multi-label dataset competition, highlighting
              RoBERTa's promise for handling such tasks in NLP.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Covi-Assist: Automatic COVID-19 Detection from Chest X-Rays
          </AccordionTrigger>
          <AccordionContent>
            <span className="block text-right py-2">
              <Link
                to="https://www.ijraset.com/best-journal/covi-assist-automatic-covid19-detection-from-chest-xrays"
                className={buttonVariants({ variant: "link", size: "sm" })}
              >
                View on IJRASET
              </Link>
            </span>
            <p>
              Covi-Assist presents a deep neural network-based model for precise
              COVID-19 detection from chest X-ray images, offering a vital tool
              for rapid and automatic diagnosis amidst the global pandemic.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <h3 className="font-semibold text-xl pb-2 pt-6">
        Professional Experience
      </h3>
      {
        "Throughout my career, I have had the opportunity to contribute to various projects and initiatives."
      }
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            SDET Intern&emsp;•&emsp;CATT Lab, University of Maryland
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground pb-2">May 2023 - Preset</p>
            <ul className="list-disc list-inside leading-6">
              <li className="py-1">
                Initiated and led the development of a document retrieval
                chatbot solution to improve user website navigation, foreseeing
                a potential 20% increase in user engagement due to its intuitive
                UI and efficient query resolution features.
              </li>
              <li className="py-1">
                Automated web testing with Cypress, reducing manual hours by
                60%. Integrated into CI/CD for improved product reliability.
              </li>
              <li className="py-1">
                Maintained test codebase across multiple projects, conducting
                through PR reviews and code analysis to ensure good practices,
                leading to significant decrease in post-release defects.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Software Development Engineer&emsp;•&emsp;Mainteny, Remote
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground pb-2">Dec 2021 - Aug 2022</p>
            <ul className="list-disc list-inside leading-6">
              <li className="py-1">
                Spearheaded the development of customer-friendly quotation and
                invoicing interfaces using React.js, streamlining business
                operations and enhancing user experience.
              </li>
              <li className="py-1">
                Automated B2B customer data migration by developing a CLI tool,
                resulting in an 80% reduction in manual effort and ensuring
                seamless transfer of data to internal databases.
              </li>
              <li className="py-1">
                Led bi-weekly product demos, showcasing new features to
                executives, providing design feedback, updating on tasks, and
                proactively proposing solutions to emerging challenges,
                strengthening decision-making and fostering teamwork.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Machine Learning Intern&emsp;•&emsp;IC Solutions, Bengaluru
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground pb-2">Sep 2020 - Nov 2020</p>
            <ul className="list-disc list-inside leading-6">
              <li className="py-1">
                Conducted feature extraction on used automobile price data,
                pinpointing pivotal features to enhance predicted results.
              </li>
              <li className="py-1">
                Evaluated multiple regression models, analyzed strengths and
                weaknesses, and deployed the top performer, achieving 94.2%
                accuracy and an R2 of 0.93.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <h3 className="font-semibold text-xl pb-2 pt-6">Projects</h3>
      <p>
        I highlight some of the exciting projects I've worked on. Each project
        represents a journey of innovation, problem-solving, and exploration.
        Here's a glimpse into what I've been up to:
      </p>
      <div className="grid md:grid-cols-2 gap-4 py-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md">
              Efficient Document Retrieval with RAG for GPT-3.5
            </CardTitle>
            <CardDescription>
              This project explores using Retrieval-Augmented Generation (RAG)
              to enhance document retrieval capabilities for GPT-3.5. RAG
              leverages a dual approach, combining information retrieval
              techniques with the powerful language generation of GPT-3.5.
            </CardDescription>
          </CardHeader>
          {/* <CardFooter className="float-right">
            <Link
              to="https://github.com/surajtc/lfw-face-recognition"
              className={buttonVariants({ variant: "link", size: "sm" })}
            >
              View on Github
            </Link>
          </CardFooter> */}
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md">LFW Face Recognition</CardTitle>
            <CardDescription>
              Evaluation of SVM and kNN classifiers using different data
              representation methods on Labeled Faces in the Wild (LFW) dataset.
            </CardDescription>
          </CardHeader>
          <CardFooter className="float-right">
            <Link
              to="https://github.com/surajtc/lfw-face-recognition"
              className={buttonVariants({ variant: "link", size: "sm" })}
            >
              View on Github
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md">AG News Classification</CardTitle>
            <CardDescription>
              Classification of news data into various categories and analysis
              of its performance using RoBERTa.
            </CardDescription>
          </CardHeader>
          <CardFooter className="float-right">
            <Link
              to="https://github.com/surajtc/ag_news_classification"
              className={buttonVariants({ variant: "link", size: "sm" })}
            >
              View on Github
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md">
              PhotoHive - A Photo Gallery App
            </CardTitle>
            <CardDescription>
              PhotoHive is a gallery app that allows users to upload, search,
              and manage photos using a serverless backend.
            </CardDescription>
          </CardHeader>
          <CardFooter className="float-right">
            <Link
              to="https://github.com/surajtc/lfw-face-recognition"
              className={buttonVariants({ variant: "link", size: "sm" })}
            >
              View on Github
            </Link>
          </CardFooter>
        </Card>
      </div>
      <p>
        Thank you for taking the time to visit, and please don't hesitate to get
        in touch if you have any questions or would like to discuss potential
        opportunities.
      </p>
    </>
  );
}
