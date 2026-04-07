import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import {
  Tabs as FumaTabs,
  Tab as FumaTab,
  TabsList,
  TabsTrigger,
} from 'fumadocs-ui/components/tabs';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Callout } from 'fumadocs-ui/components/callout';
import { Mermaid } from '@/components/mdx/mermaid';
import { Children, cloneElement, isValidElement } from 'react';
import type { ComponentProps, ReactElement, ReactNode } from 'react';

type TabChildProps = {
  title?: ReactNode;
  value?: string;
  children?: ReactNode;
};

function CardGroup(props: ComponentProps<typeof Cards>) {
  return <Cards {...props} />;
}

function AccordionGroup({
  children,
  className,
  defaultValue,
}: {
  children: ReactNode;
  className?: string;
  defaultValue?: string;
}) {
  return (
    <Accordions type="single" collapsible className={className} defaultValue={defaultValue}>
      {children}
    </Accordions>
  );
}

function slugTabValue(input: ReactNode, index: number) {
  if (typeof input === 'string') {
    const slug = input
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    return slug || `tab-${index}`;
  }

  return `tab-${index}`;
}

function Tabs({ children }: { children: ReactNode }) {
  const items = Children.toArray(children).filter((child): child is ReactElement<TabChildProps> =>
    isValidElement<TabChildProps>(child),
  );
  const tabs = items.map((child, index) => {
    const props = child.props;
    const value = props.value ?? slugTabValue(props.title, index);

    return {
      value,
      title: props.title ?? `Tab ${index + 1}`,
      child,
    };
  });

  return (
    <FumaTabs defaultValue={tabs[0]?.value}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => cloneElement(tab.child, { value: tab.value, key: tab.value }))}
    </FumaTabs>
  );
}

function Tab({
  title,
  value,
  children,
}: {
  title?: ReactNode;
  value?: string;
  children: ReactNode;
}) {
  return <FumaTab value={value ?? slugTabValue(title, 0)}>{children}</FumaTab>;
}

function Expandable({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <Accordions type="single" collapsible>
      <Accordion title={title}>{children}</Accordion>
    </Accordions>
  );
}

function Admonition({
  type,
  children,
}: {
  type: 'info' | 'warning' | 'warn' | 'idea';
  children: ReactNode;
}) {
  return <Callout type={type}>{children}</Callout>;
}

function MetaField({
  label,
  type,
  required,
  defaultValue,
  children,
}: {
  label: ReactNode;
  type?: ReactNode;
  required?: boolean;
  defaultValue?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="my-4 rounded-lg border px-4 py-3">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <code className="font-semibold">{label}</code>
        {type ? <span className="rounded bg-fd-muted px-2 py-0.5 text-xs">{type}</span> : null}
        {required ? <span className="rounded bg-red-100 px-2 py-0.5 text-xs text-red-700">required</span> : null}
        {defaultValue ? (
          <span className="rounded bg-fd-muted px-2 py-0.5 text-xs">default: {defaultValue}</span>
        ) : null}
      </div>
      <div>{children}</div>
    </div>
  );
}

function ParamField({
  query,
  type,
  required,
  default: defaultValue,
  children,
}: {
  query?: ReactNode;
  type?: ReactNode;
  required?: boolean;
  default?: ReactNode;
  children: ReactNode;
}) {
  return (
    <MetaField label={query ?? 'parameter'} type={type} required={required} defaultValue={defaultValue}>
      {children}
    </MetaField>
  );
}

function ResponseField({
  name,
  type,
  required,
  children,
}: {
  name?: ReactNode;
  type?: ReactNode;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <MetaField label={name ?? 'field'} type={type} required={required}>
      {children}
    </MetaField>
  );
}

function ResponseExample({ children }: { children: ReactNode }) {
  return <div className="my-6">{children}</div>;
}

function CodeGroup({ children }: { children: ReactNode }) {
  return <div className="my-6 space-y-4">{children}</div>;
}

function ThemeName({ children }: { children: ReactNode }) {
  return <code>{children}</code>;
}

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Card,
    CardGroup,
    Cards,
    Steps,
    Step,
    Tabs,
    Tab,
    Accordion,
    AccordionGroup,
    Expandable,
    ParamField,
    ResponseField,
    ResponseExample,
    CodeGroup,
    ThemeName,
    Info: (props) => <Admonition type="info" {...props} />,
    Note: (props) => <Admonition type="info" {...props} />,
    Tip: (props) => <Admonition type="idea" {...props} />,
    Warning: (props) => <Admonition type="warning" {...props} />,
    Mermaid,
    img: (props) => <ImageZoom {...(props as any)} />,
    ...components,
  };
}
