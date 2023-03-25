import React from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
// var Size = Quill.import('attributors/style/size');

// const ReactQuill = dynamic(
//   async () => {
//     const { default: RQ } = await import('react-quill');
//     return function forwardRef({ forwardedRef, ...props }: any) {
//       return <RQ ref={forwardedRef} {...props} />;
//     };
//   },
//   {
//     ssr: false,
//   }
// );

const RichTextInput = ({
  title,
  value,
  onChange,
  colorCode = ['#FF0000', '#FFFFFF', '#000000'],
}: any) => {
  const Quill = React.useMemo(
    () =>
      dynamic(
        async () => {
          const { default: RQ } = await import('react-quill');
          return function forwardRef({ forwardedRef, ...props }: any) {
            return <RQ ref={forwardedRef} {...props} />;
          };
        },
        {
          ssr: false,
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [colorCode]
  );

  const [enabledEditor, setEnableEditor] = React.useState(false);

  const loadQuill = async () => {
    return new Promise(async (resolve, reject) => {
      const Quill = await require('react-quill').Quill;
      resolve({ Quill });
    })
      .then(({ Quill }: any) => {
        const Size = Quill.import('attributors/style/size');
        Size.whitelist = ['12px', '16px', '20px', '24px'];
        Quill.register(Size, true);
        return;
      })
      .then(() => {
        setEnableEditor(true);
      });
  };

  React.useEffect(() => {
    loadQuill();
  }, []);

  const colorList = [
    false,
    '#000000',
    '#E60002',
    '#FE9900',
    '#FE9900',
    '#0066CB',
    '#008A00',
    '#9933FF',
    '#FFFFFF',
    '#FACCCD',
    '#FFEACB',
    '#FFFFCB',
    '#CCE8C9',
    '#CBE0F5',
    '#EBD6FF',
    '#BBBBBB',
    '#EF6666',
    '#FEC166',
    '#FFFE65',
    '#66B967',
    '#67A3E1',
    '#C284FF',
    '#888888',
    '#A00000',
    '#B16A03',
    '#B2B300',
    '#016100',
    '#0047B3',
    '#6B24B2',
    '#444444',
    '#5C0100',
    '#653D00',
    '#656600',
    '#013801',
    '#012966',
    '#3C1566',
    colorCode[0],
  ];

  return (
    <div>
      {title && (
        <span className='block text-xs md text-gray-500 my-2 uppercase tracking-wide'>
          {title}
        </span>
      )}

      {enabledEditor && (
        <Quill
          className='rounded-md'
          modules={{
            toolbar: {
              container: [
                // [{ header: [2, 3, 4, 5, false] }],
                [{ size: ['12px', false, '20px', '24px'] }],
                [
                  {
                    color: colorList,
                  },
                  { background: colorList },
                ], // dropdown with defaults from theme
                ['bold', 'italic', 'underline'], // toggled buttons
                ['link'],
              ],
            },
          }}
          theme='snow'
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default RichTextInput;
