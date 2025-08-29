import clsx from 'clsx'
import type { CSSProperties } from 'react'

import styles from './Skeleton.module.scss'

type CSSLen = CSSProperties['width']
type CSSMT = CSSProperties['marginTop']
type CSSRad = CSSProperties['borderRadius']
type Variant = 'rect' | 'text' | 'circle' | 'badge'

type Base = {
  className?: string
  width?: CSSLen
  height?: CSSLen
  marginTop?: CSSMT
  radius?: CSSRad
  style?: CSSProperties
  /** If true, do NOT set width/height inline (classes can control size) */
  noInlineSize?: boolean
  /** If true, do NOT set marginTop inline */
  noInlineSpacing?: boolean
  /** If true, do NOT set borderRadius inline */
  noInlineRadius?: boolean
}

type WithAuto = { autoSize?: boolean } // when true, add sensible defaults

type SkeletonProps = Base & { variant?: Variant }
type SkeletonLineProps = Omit<Base, 'height'> & { height?: CSSLen } & WithAuto
type SkeletonTitleProps = Omit<Base, 'height'> & { height?: CSSLen } & WithAuto
type SkeletonBadgeProps = Omit<Base, 'radius'> & WithAuto
type SkeletonCircleProps = Omit<Base, 'height' | 'radius' | 'width'> &
  WithAuto & { size?: CSSLen }

const buildStyle = (buildParams: Base): CSSProperties => {
  const {
    width,
    style,
    height,
    radius,
    marginTop,
    noInlineSize,
    noInlineRadius,
    noInlineSpacing,
  } = buildParams

  const implementStyle: CSSProperties = { ...(style ?? {}) }

  if (!noInlineSize && width !== undefined) implementStyle.width = width
  if (!noInlineSize && height !== undefined) implementStyle.height = height
  if (!noInlineSpacing && marginTop !== undefined) implementStyle.marginTop = marginTop
  if (!noInlineRadius && radius !== undefined) implementStyle.borderRadius = radius
  return implementStyle
}

export const Skeleton = (props: SkeletonProps) => {
  const {
    style,
    width,
    radius,
    height,
    marginTop,
    className,
    noInlineSize,
    noInlineRadius,
    noInlineSpacing,
    variant = 'rect',
  } = props

  return (
    <div
      aria-hidden="true"
      style={buildStyle({
        width,
        style,
        height,
        radius,
        marginTop,
        noInlineSize,
        noInlineRadius,
        noInlineSpacing,
      })}
      className={clsx(styles.skeleton, styles.shimmer, styles[variant], className)}
    />
  )
}

export const SkeletonLine = (props: SkeletonLineProps) => {
  const { height, autoSize = true, noInlineSize, ...rest } = props

  return (
    <Skeleton
      variant="text"
      height={autoSize && !noInlineSize ? height ?? 14 : undefined}
      {...{ noInlineSize, ...rest }}
    />
  )
}

export const SkeletonTitle = (props: SkeletonTitleProps) => {
  const { height, autoSize = true, noInlineSize, ...rest } = props

  return (
    <Skeleton
      variant="text"
      height={autoSize && !noInlineSize ? height ?? 20 : undefined}
      {...{ noInlineSize, ...rest }}
    />
  )
}

export const SkeletonBadge = (props: SkeletonBadgeProps) => {
  const { width, height, autoSize = true, noInlineSize, ...rest } = props

  return (
    <Skeleton
      radius={999}
      variant="badge"
      width={autoSize && !noInlineSize ? width ?? 96 : width}
      height={autoSize && !noInlineSize ? height ?? 24 : height}
      {...{ noInlineSize, ...rest }}
    />
  )
}

export const SkeletonCircle = (props: SkeletonCircleProps) => {
  const { size, autoSize = true, noInlineSize, ...rest } = props

  return (
    <Skeleton
      radius={999}
      variant="circle"
      width={autoSize && !noInlineSize ? size ?? 64 : size}
      height={autoSize && !noInlineSize ? size ?? 64 : size}
      {...{ noInlineSize, ...rest }}
    />
  )
}
