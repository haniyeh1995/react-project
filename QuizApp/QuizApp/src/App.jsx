import Quiz from "./Quiz";
import {jsQuizz} from "./Constants";

function APP() {
  return(
    <Quiz questions={jsQuizz.questions} />
  )

}
export default APP;
