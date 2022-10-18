import { fetchHTML } from 'common/utils/html';

export const getUSTreasuryRate = async (year: number) => {
  const html = await fetchHTML(`https://www.multpl.com/${year}-year-treasury-rate/table/by-month`);
  const table = html.getElementById('datatable');
  const row = table.getElementsByTagName('tr')[1];
  const [date, rate] = row.getElementsByTagName('td').map(el => el.innerText);

  const nummizeRate = Number(rate.trim().replace('%', ''));

  return { date: new Date(date).toISOString(), rate: nummizeRate };
};
