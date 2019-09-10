import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

interface IIssueProps {
  id?: string;
  state: string;
  url: string;
  body: string;
  repository?: {
    name: string;
    url: string;
  };
  publishedAt: string;
  labels?: { name: string; color: string }[];
}

export const IssueItem: React.FC<IIssueProps> = ({
  state,
  url,
  body,
  repository,
  publishedAt,
  labels,
  id
}) => {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          border: 2px dashed black;
          padding: 15px;
          position: relative;
        }
        .labels-item {
          color: white;
          padding: 3px;
          font-weight: 600px;
          max-width: 220px;
          white-space: nowrap;
          overflow: hidden !important;
          text-overflow: ellipsis;
          border-radius: 2px;
          margin-bottom: 3px;
        }
        .labels-item:last-child {
          margin-bottom: 0;
        }
        :global(pre) {
          white-space: nowrap;
          overflow: hidden !important;
          text-overflow: ellipsis;
        }
        .show-issue {
          position: absolute;
          right: 5px;
          top: 5px;
          z-index: 1;
        }
      `}</style>
      {id && (
        <Link href={`/issue?id=${id}`} as={`/issue/${id}`}>
          <a className="show-issue">Show issue</a>
        </Link>
      )}
      <ul className="issues-props-list">
        <li>
          <strong>State:</strong> <span>{state}</span>
        </li>
        <li>
          <strong>URL:</strong> <a href={url}>{url}</a>
        </li>
        <li>
          <strong>Body:</strong>{' '}
          <p>
            <ReactMarkdown
              className="markdown"
              source={body}
              disallowedTypes={['image', 'heading']}
              unwrapDisallowed
            />
          </p>
        </li>
        {repository && (
          <li>
            <strong>Repository:</strong>{' '}
            <a href={repository.url}>{repository.name}</a>
          </li>
        )}
        <li>
          <strong>Published at:</strong> <span>{publishedAt}</span>
        </li>
        {labels && labels.length && (
          <li>
            <strong>Labels:</strong>{' '}
            <ul className="labels-list">
              {labels.map(({ name, color }) => {
                return (
                  <li
                    className={'labels-item'}
                    key={name}
                    style={{ backgroundColor: `#${color}` }}
                  >
                    <span>{name}</span>
                  </li>
                );
              })}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
};
