import * as eva from "@eva-design/eva";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { RegisterForm } from "./auth/components";
import { Safa } from "./Safa";

const HomeScreen = () => (
  <SafeAreaView style={Safa.Anda}>
    <Layout style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <RegisterForm />
      </ScrollView>
    </Layout>
  </SafeAreaView>
);

const queryClient = new QueryClient();

export function Bootstrap() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <HomeScreen />
      </ApplicationProvider>
    </QueryClientProvider>
  );
}
