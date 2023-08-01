import { CopyIcon } from "@/components/icons/CopyIcon"

export const CopyButton = () => {
  return (
    <button className="inline-flex justify-center items-center">
      <CopyIcon title="Clique aqui para copiar" className="fill-white" />
    </button>
  )
}
