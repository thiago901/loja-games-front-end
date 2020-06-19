import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik';
import Painel from '../../components/Panel';
import SystemWeb from '../_layouts/systemWeb';

import api from '../../services/api';

import { Content, Form } from './styles';

export default function EmployeeEdit() {
  const [papers, setPapers] = useState([]);

  const handleSubmit = async values => {
    values.provider = true;
    console.tron.warn(values);

    await api.post('/users/provider', values);
  };
  const initialValues = {};

  useEffect(() => {
    async function load() {
      const resp = await api.get(`/paper`);

      setPapers(resp.data);
    }
    load();
  }, []);

  const FormEmployee = ({ handleSubmit, initialValues }) => {
    const validations = Yup.object().shape({
      email: Yup.string()
        .email()
        .required('Informe o email'),
      password: Yup.string()
        .min(8)
        .required('Informe a senha'),
      paper: Yup.number().required('informe um tipo'),
    });

    return (
      <Form>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <FormikForm>
            <div className="group-input">
              <Field
                id="email"
                type="email"
                placeholder="Seu email"
                name="email"
                autocomplete="off"
              />
              <ErrorMessage
                className="Form-Error"
                component="span"
                name="email"
              />
              <Field as="select" name="paper">
                <option selected disabled>
                  Escolha um tipo
                </option>
                {papers.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.title}
                  </option>
                ))}
              </Field>

              <Field
                id="password"
                type="password"
                placeholder="Sua senha"
                name="password"
              />
              <ErrorMessage
                className="Form-Error"
                component="span"
                name="password"
              />
            </div>
            <button type="submit">Salvar</button>
          </FormikForm>
        </Formik>
      </Form>
    );
  };

  return (
    <SystemWeb>
      <Painel>
        <Content>
          <FormEmployee
            initialValues={initialValues}
            handleSubmit={handleSubmit}
          />
        </Content>
      </Painel>
    </SystemWeb>
  );
}

EmployeeEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};
