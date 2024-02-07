import { CustomValidationError } from "src/app/shared";




export class FailedResponseDTO {
  errorMessage: string;
  errors?: CustomValidationError;
  errorType?: string;
}