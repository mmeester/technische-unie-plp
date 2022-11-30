<template>
  <Suspense>
    <router-view />
    <template #fallback>
      Een moment geduld a.u.b.
    </template>
  </Suspense>
</template>
