import { Link } from "@remix-run/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

import {
  Card,
  CardContent,
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

      <h3 className="font-semibold text-xl pb-2">Education</h3>
      {
        "With a background in Computer Science and a Master of Professional Studies in Machine Learning from the University of Maryland, I have cultivated a diverse skill set that includes feature engineering, optimization, deep learning, NLP, computer vision, and cloud computing."
      }
      <h3 className="font-semibold text-xl pb-2">Academic Research</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            RoBERTa-Based Emotion Classification: Improving Performance on
            Imbalanced Data
          </AccordionTrigger>
          <AccordionContent>
            <Link to="https://aclanthology.org/2023.wassa-1.46.pdf">
              View on ACL
            </Link>
            Explored RoBERTa's effectiveness for emotion classification in
            essays, overcoming imbalanced dataset challenges. Achieved top
            performance in a multi-label dataset competition, highlighting
            RoBERTa's promise for handling such tasks in NLP
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Covi-Assist: Automatic COVID-19 Detection from Chest X-Rays
          </AccordionTrigger>
          <AccordionContent>
            <Link to="https://www.ijraset.com/best-journal/covi-assist-automatic-covid19-detection-from-chest-xrays">
              View on IJRASET
            </Link>
            Covi-Assist presents a deep neural network-based model for precise
            COVID-19 detection from chest X-ray images, offering a vital tool
            for rapid and automatic diagnosis amidst the global pandemic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <h3 className="font-semibold text-xl pb-2">Professional Experience</h3>
      {
        "Throughout my career, I have had the opportunity to contribute to various projects and initiatives."
      }
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            SDET Intern | CATT Lab, University of Maryland
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc">
              <li>
                Initiated and led the development of a document retrieval
                chatbot solution to improve user website navigation, foreseeing
                a potential 20% increase in user engagement due to its intuitive
                UI and efficient query resolution features.
              </li>
              <li>
                Automated web testing with Cypress, reducing manual hours by
                60%. Integrated into CI/CD for improved product reliability.
              </li>
              <li>
                Maintained test codebase across multiple projects, conducting
                through PR reviews and code analysis to ensure good practices,
                leading to significant decrease in post-release defects.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Software Development Engineer | Mainteny, Remote
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc">
              <li>
                Spearheaded the development of customer-friendly quotation and
                invoicing interfaces using React.js, streamlining business
                operations and enhancing user experience.
              </li>
              <li>
                Automated B2B customer data migration by developing a CLI tool,
                resulting in an 80% reduction in manual effort and ensuring
                seamless transfer of data to internal databases.
              </li>
              <li>
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
            Machine Learning Intern | IC Solutions, Bengaluru
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc">
              <li>
                Conducted feature extraction on used automobile price data,
                pinpointing pivotal features to enhance predicted results.
              </li>
              <li>
                Evaluated multiple regression models, analyzed strengths and
                weaknesses, and deployed the top performer, achieving 94.2%
                accuracy and an R2 of 0.93.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h3 className="font-semibold text-xl pb-2">Projects</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-md">Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-md">Card Title</CardTitle>
            <CardDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ad
              nesciunt architecto eaque ea et obcaecati magnam rem corrupti
              quis!
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-md">Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-md">Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardFooter>
            <p>Card Footer</p>
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
