import React, { useState } from 'react';
import { useFormik } from 'formik';
import { TextInput, Select, Button, Group, Flex, Text } from '@mantine/core';
import * as Yup from 'yup';

const defaultLanguageOptions = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'sql', label: 'SQL' },
  { value: 'java', label: 'Java' },
  { value: 'c', label: 'c' },
  { value: 'cplusplus', label: 'C++' },
  { value: 'csharp', label: 'C#' },
  { value: 'php', label: 'PHP' },
  { value: 'clojure', label: 'Clojure' },
  { value: 'haskell', label: 'Haskell' },
  { value: 'rust', label: 'Rust' },
];

const defaultLabelOptions = [
  { value: 'good-first-issue', label: 'good-first-issue' },
  { value: 'beginner-friendly', label: 'beginner-friendly' },
];

const validationSchema = Yup.object().shape({
  text: Yup.string().notRequired(),
  language: Yup.string().required('Language is required'),
  labels: Yup.string().notRequired(),
});

export type FormValues = {
  text?: string;
  language?: string;
  label?: string;
};

export const defaultFormValues: FormValues = {
  text: '',
  language: defaultLanguageOptions[0].value,
  label: defaultLabelOptions[0].value,
};

type FormProps = FormValues & {
  onSubmit: (values: FormValues) => void;
  isLoading: boolean;
};

export const Form: React.FC<FormProps> = ({
  text = defaultFormValues.text,
  language = defaultFormValues.language,
  label = defaultFormValues.label,
  onSubmit,
  isLoading,
}) => {
  const formik = useFormik<FormValues>({
    initialValues: {
      text,
      language,
      label,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const [languageOptions, setLanguageOptions] = useState(
    defaultLanguageOptions
  );
  const [labelOptions, setLabelOptions] = useState(defaultLabelOptions);

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput
        mb={'sm'}
        label="Text:"
        placeholder="Type to find by issue text..."
        name="text"
        value={formik.values.text}
        onChange={formik.handleChange}
        error={formik.touched.text && formik.errors.text}
      />

      <Group>
        <Flex justify="space-between" w="100%">
          <Select
            label="Language:"
            data={languageOptions}
            name="language"
            placeholder="Type to find by any language..."
            value={formik.values.language}
            onChange={(value) => formik.setFieldValue('language', value)}
            error={formik.touched.language && formik.errors.language}
            nothingFound="Nothing found"
            searchable
            creatable
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={(query) => {
              const item = { value: query, label: query };
              setLanguageOptions((current) => [...current, item]);
              return item;
            }}
          />
          <Select
            label="Label:"
            name="label"
            placeholder="Type to find by any label..."
            data={labelOptions}
            value={formik.values.label}
            onChange={(value) => formik.setFieldValue('label', value)}
            error={formik.touched.label && formik.errors.label?.toString()}
            getCreateLabel={(query) => `+ Create ${query}`}
            searchable
            creatable
            onCreate={(query) => {
              const item = { value: query, label: query };
              setLabelOptions((current) => [...current, item]);
              return item;
            }}
          />
        </Flex>
      </Group>
      <Text w="100%" align="center" mb="md">
        <Button mt="md" type="submit" disabled={isLoading}>
          Find
        </Button>
      </Text>
    </form>
  );
};
