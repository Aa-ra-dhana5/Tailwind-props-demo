import React from 'react'

function Card(/*props*/ {username, btnText="visit me"}) {

    // console.log('props', props)
    // console.log(props.username)
    console.log(username)
  return (
    <a
  href="#"
  class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div class="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
        Building a SaaS product as a software developer
      </h3>

      <p class="mt-1 text-xs font-medium text-gray-600">{username}</p>
    </div>

    <div class="hidden sm:block sm:shrink-0">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        class="size-16 rounded-lg object-cover shadow-xs"
      />
    </div>
  </div>

  <div class="mt-4">
    <p class="text-sm text-pretty text-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
      maiores deleniti consectetur nobis et eaque.
    </p>
  </div>

  <dl class="mt-6 flex gap-4 sm:gap-6">
    <div class="flex flex-col-reverse">
      <dt class="text-sm font-medium text-gray-600">Published</dt>
      <dd class="text-xs text-gray-500">31st June, 2021</dd>
    </div>

    <div class="flex flex-col-reverse">
      <dt class="text-sm font-medium text-gray-600">Reading time</dt>
      <dd class="text-xs text-gray-500">{btnText}</dd>

      
    </div>
  </dl>
</a>
  )
}

export default Card
