module.exports = [
  {
    type: 'select',
    name: 'serviceType',
    message: '어떤 타입의 서비스를 만드려고 하시나요?',
    choices: ['calculators', 'converters', 'data', 'etc'],
  },
  {
    type: 'input',
    name: 'name',
    message: '서비스 이름을 영어로 입력해주세요.',
  },
  {
    type: 'input',
    name: 'metaTitle',
    message: '서비스의 이름을 한글로 입력해주세요. 이 이름은 페이지 헤더에 들어가게 됩니다.',
  },
  {
    type: 'input',
    name: 'metaDescription',
    message: '서비스의 설명을 한글로 입력해주세요. 이 설명은 페이지 헤더에 들어가게 됩니다.',
  },
];
