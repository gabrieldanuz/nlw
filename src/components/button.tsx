import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps
} from 'react-native'

type Props = TouchableOpacityProps & {
  title: string
  isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      className="w-full h-14 bg-orange-400 items-center justify-center rounded-lg"
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator className="text-green-500" />
      ) : (
        <Text>{title}</Text>
      )}
    </TouchableOpacity>
  )
}
