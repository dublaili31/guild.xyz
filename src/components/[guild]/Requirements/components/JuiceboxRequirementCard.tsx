import { Requirement } from "types"
import RequirementCard from "./common/RequirementCard"
import RequirementText from "./common/RequirementText"

type Props = {
  requirement: Requirement
}

const JuiceboxRequirementCard = ({ requirement }: Props) => (
  <RequirementCard requirement={requirement}>
    <RequirementText>{`Hold ${
      requirement.data?.minAmount > 0
        ? `at least ${requirement.data?.minAmount}`
        : "any amount of"
    } ${requirement.symbol} ticket(s) in Juicebox`}</RequirementText>
  </RequirementCard>
)

export default JuiceboxRequirementCard