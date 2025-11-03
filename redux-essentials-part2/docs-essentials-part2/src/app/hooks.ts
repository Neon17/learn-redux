import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

/**
 *  Defining Pre-Typed React-Redux Hooks
    By default the useSelector hook needs you to declare (state: RootState) for every selector function. 
    We can create pre-typed versions of the useSelector and useDispatch hooks so that 
    We don't have to keep repeating the : RootState part every time.
 */

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()