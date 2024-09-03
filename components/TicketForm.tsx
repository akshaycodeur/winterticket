"use client";

import React, { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { ticketSchema } from "@/app/ValidationSchemas/ticket";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Input } from "./ui/input";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "./ui/select";
import axios from "axios";

type TicketFormData = z.infer<typeof ticketSchema>;

const TicketForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<TicketFormData>({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "OPEN", // Provide a default value for status
    },
  });

  const onSubmit = async (values: TicketFormData) => {
    try {
      setIsSubmitting(true);
      setError("");
      await axios.post("/api/tickets", values); // Make sure the API endpoint is correct
      // Optionally handle successful submission, like redirect or form reset
    } catch (error) {
      console.error(error);
      setError("Unknown error occurred");
    } finally {
      setIsSubmitting(false); // Ensure submitting state is reset even if an error occurs
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-700">
                  Issue:
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Issue Title"
                    {...field}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Controller
            name="description"
            control={form.control}
            render={({ field }) => (
              <div className="space-y-2">
                <SimpleMDE
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  options={{
                    placeholder: "Description",
                    spellChecker: false,
                  }}
                  className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-700">
                  Status
                </FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                    className="w-full"
                  >
                    <SelectTrigger className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                      <SelectValue placeholder="Status..." />
                    </SelectTrigger>
                    <SelectContent className="w-full">
                      <SelectItem value="OPEN">Open</SelectItem>
                      <SelectItem value="IN_PROGRESS">Ongoing</SelectItem>
                      <SelectItem value="DONE">Complete</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Submit
          </button>
        </form>
      </Form>
    </div>
  );
};

export default TicketForm;
