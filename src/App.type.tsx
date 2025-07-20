interface PersonDataProps {
  firstName: string;
  secondName: string;
  niche: string;
  userStatement: string;
  imageSource: string;
}

interface PersonalDataInputProps {
  personData: PersonDataProps;
  handleInputChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    propertyName: string
  ) => void;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface JobProps {
  position: string;
  company: string;
  startingDate: string;
  endingDate: string;
  role: string;
  id: number;
}

interface WorkHandlerDataProps {
  element?: HTMLInputElement | HTMLTextAreaElement;
  id?: number;
  property?: string;
  addNewJob?: boolean;
  deleteJob?: boolean;
}

interface WorkExperienceProps {
  jobs: JobProps[];
  handleChange: (workHandlerData: WorkHandlerDataProps) => void;
}

export { PersonalDataInputProps, WorkExperienceProps };
