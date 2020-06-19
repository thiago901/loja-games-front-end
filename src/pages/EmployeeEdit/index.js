import React, { useState, useEffect } from 'react';

import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik';

import Painel from '../../components/Panel';
import SystemWeb from '../_layouts/systemWeb';

import api from '../../services/api';

import { Content, Form } from './styles';

export default function EmployeeEdit({ match }) {
  const [papers, setPapers] = useState([]);
  const [paper, setPaper] = useState();
  // const [idPaper, setIdPaper] = useState();

  const [initialValues, setInitialValues] = useState({});

  const { id } = match.params;

  useEffect(() => {
    async function load() {
      const response = await api.get(`/user/provider/${id}`);

      const resp = await api.get(`/paper`);
      setInitialValues(response.data);
      setPaper(response.data.paperUser.paper_id);
      setPapers(resp.data);
    }
    load();
  }, [id]);

  const handleSubmit = async values => {
    await api.put(`/user/provider/${id}`, values);
  };

  // async function handleSaveUser() {
  //   const data = {
  //     name,
  //     email,
  //     oldPassword,
  //     password,
  //     confirmPassword,
  //   };
  //   const dataPaper = {
  //     id: idPaper,
  //     paper_id: paper,
  //     user_id: id,
  //   };

  //   await api.put(`/user/provider/${id}`, data);
  //   await api.put(`/paperUser`, dataPaper);
  // }

  const FormEmployee = ({ handleSubmit, initialValues }) => {
    const validations = Yup.object().shape({
      email: Yup.string().email('Email de ser um email valido'),
      paperId: Yup.number(),
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
                disabled
              />
              <ErrorMessage
                className="Form-Error"
                component="span"
                name="email"
              />

              <Field as="select" name="paperId">
                <option selected disabled>
                  Escolha um tipo
                </option>
                {papers.map(p => (
                  <option
                    key={p.id}
                    value={p.id}
                    selected={p.id === initialValues.paperUser.paper_id}
                  >
                    {p.title}
                  </option>
                ))}
              </Field>
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
  match: PropTypes.element.isRequired,
};
