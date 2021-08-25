import React from 'react';
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components';

export const TextStyleVariantMap = {
    title: css`
        font-family: ${({theme})=> theme.typographyVariant.title.fontFamily};
          font-size:${({ theme }) => theme.typographyVariant.title.fontSize};
          font-weight:${({ theme }) => theme.typographyVariant.title.fontWeight};
          line-height:${({ theme }) => theme.typographyVariant.title.lineHeight};
      `,
    titleXS: css`
        font-family: ${({theme})=> theme.typographyVariant.titleXS.fontFamily};
        font-size:${({ theme }) => theme.typographyVariant.titleXS.fontSize};
        font-weight:${({ theme }) => theme.typographyVariant.titleXS.fontWeight};
        line-height:${({ theme }) => theme.typographyVariant.titleXS.lineHeight};
    `,
    SectionTitle: css`
        font-size:${({ theme }) => theme.typographyVariant.SectionTitle.fontSize};
        font-weight:${({ theme }) => theme.typographyVariant.SectionTitle.fontWeight};
        line-height:${({ theme }) => theme.typographyVariant.SectionTitle.lineHeight};
    `,
    label: css`
            font-size:${({ theme }) => theme.typographyVariant.label.fontSize};
            font-weight:${({ theme }) => theme.typographyVariant.label.fontWeight};
            line-height:${({ theme }) => theme.typographyVariant.label.lineHeight};
        `,
  };


const TextBase=styled.span`
    ${(prop)=>TextStyleVariantMap[prop.variant]}
`;

export default function Text({tag,children, variant, ...prop}){
    return(
        <TextBase
            as={tag}
            {...prop}
            variant={variant}
            >
                {children}
            </TextBase>
    )
}

Text.propsType = {
    tag: PropTypes.string.isRequired,
    variant: PropTypes.string,
    children: PropTypes.node,
  };
  
  Text.defaultProps = {
    tag: 'span',
    variant: 'label',
    children: null, // por causa da teag input que nao tem filho de fato
  };