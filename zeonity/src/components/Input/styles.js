import styled from "styled-components"
import MaskedInput from "react-text-mask"

const Input = styled.input`
  width: 100%;
  min-height: 40px;
  padding: 0 20px;
  border-radius: 8px;
  margin-top: 10px;
  border: 1px solid var(--color-border);
  color: var(--color-text-gray-dark);

  &::placeholder {
    color: var(--color-text-gray-dark);
  }
`

const Label = styled.label`
  color: var(--color-text-gray-dark);
`

const MaskInput = styled(MaskedInput)`
  width: 100%;
  min-height: 40px;
  padding: 0 20px;
  border-radius: 8px;
  margin-top: 10px;
  border: 1px solid var(--color-border);
  color: var(--color-text-gray-dark);

  &::placeholder {
    color: var(--color-text-gray-dark);
  }
`

export {Label, Input, MaskInput}