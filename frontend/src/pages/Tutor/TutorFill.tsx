import React, { useState, useEffect, useContext }  from 'react';
import Header from '../../components/Header';
import { Button, Flex, VStack, HStack } from "@chakra-ui/react";
import ReturnFooter from '../../components/ReturnFooter';
import TutorFillC from '../../components/TutorFillC';
import { useUser } from '../../context/UserContext';

interface Question {
  id: number;
  text: string;
  type: 'text' | 'range' | 'binary';
}

interface Questions {
  [key: string]: Question;
}


// bilan début
const questionForm1 : Questions = {
  q1: { id: 1, text: "Où est-ce qui vous plaît et vous motive dans votre stage ?", type: 'text'},
  q2: { id: 2, text: "Décrivez une situation de travail marquante que vous avez vécu pendant votre stage.", type: 'text'},
  q3: { id: 3, text:"Avez-vous rencontré, depuis le début de votre stage, une situation difficile ou problématique ? Si oui, comment avez-vous réagi ?",  type: 'text'},
  q4: { id: 4, text: "Que retirez-vous comme apprentissage depuis le début de votre stage (culture d'entreprise, particularité du secteur, du métier...) ?",  type: 'text'},
  q5: { id: 5, text: "Comment gérez-vous les délais dans votre travail ?",  type: 'text'}, 
  q6: { id: 6, text: "De quelle(s) matière(s) utilisez-vous vos capacités/talents dans votre stage ? Donnez des exemples concrets.",  type: 'text'},
  q7: { id: 7, text: "Travailler en équipe ?",  type: 'range' },
  q8: { id: 8, text: "Pourquoi vous êtes-vous attribué cette note ? Donnez un exemple concret :",  type: 'text'},
  q9: { id: 9, text: "Etes autonome ?", type: 'range' },
  q10: { id: 10, text: "Pourquoi vous êtes-vous attribué cette note ? Donnez un exemple concret :",  type: 'text'},
  q11: { id: 11, text: "Etre adaptale ?", type: 'range' },
  q12: { id: 12, text: "Pourquoi vous êtes-vous attribué cette note ? Donnez un exemple concret :",  type: 'text'},
  q13: { id: 13, text: "Respecter les délais fixés ?", type: 'range' },
  q14: { id: 14,  text: "Pourquoi vous êtes-vous attribué cette note ? Donnez un exemple concret :",  type: 'text'},
  q15: { id: 15, text: "Prendre des initiatives ?" ,type: 'range' },
  q16: { id: 16, text: "Pourquoi vous êtes-vous attribué cette note ? Donnez un exemple concret :",  type: 'text'},
  q17: { id: 17, text: "Réaliser un travail de quanlité (rigueur professionnelle, être appliqué...) ?",   type: 'range' },
  q18: { id: 18, text: "Pourquoi vous êtes-vous attribué cette note ? Donnez un exemple concret :",  type: 'text'},
  q19: { id: 19, text: "Souhaitez-vous me contacter pour échanger sur le déroulement de votre stage (Oui ou Non) ?", type: 'binary'},
  q20: { id: 20, text: "Si oui, par quel moyen (par téléphone, mail) ?", type: 'text'},
};


// bilan milieu
const questionForm2 : Questions = {
  q1: { id: 1, text: "Vos missions ont-elles évolué depuis le début de votre stage ? Si oui, quelles sont-elles ? Donnez des exemples concrets de la réalisation de ces missions", type: 'text'},
  q2: { id: 2,text: "Citez une de vos réalisations dont vous êtes fier/ère",type: 'text'},
  q3: { id: 3, text: "Comment avez-vous procédé pour mener à bien cette mission ?",type: 'text'},
  q4: { id: 4, text: "Quels ont été vos défis pendant votre stage ? Indiquez par exemple des points qui vous semblaient difficiles voire impossible à aborder lorsqu’ils vous ont été demandés",type: 'text'},
  q5: { id: 5,text:"Comment avez-vous réussi à les surmonter ? Ou avec le recul, comment auriez-vous pu les surmonter ?",type: 'text'},
  q6: { id: 6, text: "Comment votre stage confirme-t-il ou infirme-t-il votre projet professionnel ?",type: 'text'},
  q7: { id: 7,text: "Travailler en équipe ?", type: 'range' },
  q8: { id: 8,text: "Pourquoi vous êtes-vous attribué cette note ? Donnez un exemple concret :",type: 'text'},
  q9: { id: 9,text: "Être adaptable ?",type: 'range' },
  q10: { id: 10,text: "Pourquoi vous êtes-vous attribué cette note ? Donnez un exemple concret :",type: 'text'},
  q11: { id: 11, text: "Organiser votre travail dans les délais ?",type: 'range' },
  q12: { id: 12, text: "Pourquoi vous êtes-vous attribué cette note ? Donnez un exemple concret :",type: 'text'},
  q13: { id: 13, text: "Prendre des initiatives ?",type: 'range' },
  q14: { id: 14,text: "Pourquoi vous êtes-vous attribué cette note ? Donnez un exemple concret :",type: 'text'},
  q15: { id: 15,text: "Réaliser un travail de qualité (rigueur professionnel, être appliqué,…) ?",type: 'range' },
  q16: { id: 16,text: "Pourquoi vous êtes-vous attribué cette note ? Donnez un exemple concret :",type: 'text'},
  q17: { id: 17, text: "Souhaitez-vous me contacter pour échanger sur le déroulement de votre stage ?",type: 'binary' },
  q18: { id: 18,text: "Si oui, Par quel moyen (par téléphone, mail)?", type: 'text'},
};



interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  type: string;
  telephone: string;
  oldPassword: string;
  promotion: number;
  year: string;
  company: {
      name: string;
      address: string;
      city: string;
      zipCode: string;
  };
};




const TutorFill: React.FC = () => {
    const [linkPage, setLinkPage] = useState('');
    const [activeForm, setActiveForm] = useState('first');
    const [formTitle, setFormTitle] = useState('');
    const [formDeadline, setFormDeadline] = useState('');
    const [questions, setQuestions] = useState<Questions>({});
    const [fileCategory, setFileCategory] = useState(0);
    // const user = useUser();

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
          setUser(JSON.parse(storedUser));
          console.log("TEST user.promotion: ", `${user?.promotion}`);
          console.log("User ID from localStorage:", JSON.parse(storedUser)?.id);
      };
    }, []);




    const handleFormButtonClick = (formName: React.SetStateAction<string>) => {
      setActiveForm(formName); 
    };

    return (
      <Flex
        direction="column"
        minHeight="100vh"
      >
        <Header userFirstName={user?.firstName} userLastName={user?.lastName} userEmail={user?.email}  message="!!! The second self-evaluation form should be filled before 12/31/2023 00:00:00." />


        <HStack spacing={4} my={10} justify="center" direction="row">
          <Button onClick={() => handleFormButtonClick('first')} width="150px" color="white" bgColor="blue.500">
            First form
          </Button>
          <Button onClick={() => handleFormButtonClick('second')} width="150px" color="white" bgColor="blue.500">
            Second form
          </Button>
          <Button onClick={() => handleFormButtonClick('third')} width="150px" color="white" bgColor="blue.500">
            Third form
          </Button>
          <Button onClick={() => handleFormButtonClick('forth')} width="150px" color="white" bgColor="blue.500">
            Fiche visit
          </Button>
        </HStack>

        <Flex
          direction="column"
          flex="1"
          overflowY="auto" 
          paddingBottom="250px"
          gap={10}
          justify="center"
          align="center"
        >
          {activeForm === 'first' && <TutorFillC  formTitle="BILAN PÉRIODIQUE (DÉBUT DE STAGE: 1 MOIS)" formDeadline="01/20/2023 00:00:00"  questions={questionForm1} fileCategory={4} />}
          {activeForm === 'second' && <TutorFillC formTitle="BILAN PÉRIODIQUE (MILIEU DE STAGE: 3 MOIS)" formDeadline="04/20/2023 00:00:00" questions={questionForm2} fileCategory={5}  />}
        </Flex>

        <ReturnFooter  linkPage="/Tutor/home" />
      </Flex>
    );
  };
  
export default TutorFill;
