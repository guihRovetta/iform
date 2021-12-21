import { api } from '../index';

type AddressResponse = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

type AddressType = {
  zipcode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
};

const formatAddress = (addressResponse: AddressResponse) => {
  const { cep, logradouro, complemento, bairro, localidade, uf } =
    addressResponse || {};

  return {
    zipcode: cep?.replace('-', ''),
    street: logradouro,
    number: undefined,
    complement: complemento,
    neighborhood: bairro,
    city: localidade,
    state: uf,
  };
};

export const getAddress = async (zipcode: string): Promise<AddressType> => {
  try {
    const { data } = await api.get<AddressResponse>(`${zipcode}/json`);

    const formattedAddress = formatAddress(data);

    return formattedAddress;
  } catch {
    throw new Error('Não foi possível realizar a busca do CEP informado!');
  }
};
