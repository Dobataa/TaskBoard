import { Chip } from "@mui/material"
import { Priority } from "../../models"

type PriorityChipProps = {
  type: number
}

export default function PriorityChip({ type }: PriorityChipProps) {
  return (
    <>
      {type === Priority.Low && (
        <Chip
          label="Low"
          sx={{
            backgroundColor: "#e8f5e9",
            color: "#2e7d32",
            fontWeight: 600,
            border: "1px solid #a5d6a7",
          }}
        />
      )}

      {type === Priority.Medium && (
        <Chip
          label="Medium"
          sx={{
            backgroundColor: "#fff8e1",
            color: "#f9a825",
            fontWeight: 600,
            border: "1px solid #ffe082",
          }}
        />
      )}

      {type === Priority.High && (
        <Chip
          label="High"
          sx={{
            backgroundColor: "#ffebee",
            color: "#c62828",
            fontWeight: 600,
            border: "1px solid #ef9a9a",
          }}
        />
      )}
    </>
  )
}