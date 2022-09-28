import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { SignInUpFormValues } from '~/shared/types'
import AuthForm from '~/components/molecules/AuthForm'
import AuthLayout from '~/components/templates/AuthLayout'

const SignUp: NextPage = (): JSX.Element => {
  const router = useRouter()

  const handleAuthSubmit = async (data: SignInUpFormValues): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
        router.push('/')
      }, 3000)
    })
  }

  return (
    <AuthLayout metaTitle="Sign Up">
      <AuthForm actions={{ handleAuthSubmit }} isLogin={false} />
    </AuthLayout>
  )
}

export default SignUp
