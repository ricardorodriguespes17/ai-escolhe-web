import { twMerge } from "tailwind-merge"

type LogoProps = {
  size?: "sm" | "md" | "lg",
  mini?: boolean
}

const Logo = ({ size = "md" }: LogoProps) => {
  const sizes = {
    sm: "w-[150px]",
    md: "w-[200px]",
    lg: "w-[250px]"
  }

  return (
    <div className={twMerge(
      "flex items-center justify-center",
      sizes[size]
    )}>
      <svg
        viewBox="0 0 264.286 50"
        className="w-full max-h-full"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M25 0.001c-13.798 0 -25 11.203 -25 25s11.203 25 25 25 25 -11.204 25 -25 -11.203 -25 -25 -25m0 1.724c12.847 0 23.276 10.429 23.276 23.276S37.848 48.278 25 48.278 1.724 37.849 1.724 25 12.152 1.725 25 1.725m-15.987 23.529a12.143 12.143 0 0 0 -1.114 5.079c0 7.55 7.014 13.746 15.726 13.746 3.827 0 7.862 -1.621 10.601 -4.201 0.002 -0.002 0.009 -0.002 0.014 -0.002 2.084 -0.384 4.041 -1.278 5.696 -2.709 5.556 -4.793 5.664 -13.889 0.131 -20.298a12.143 12.143 0 0 0 -1.142 -1.149C36.961 8.471 28.634 4.306 20.243 6.516c-8.425 2.216 -13.631 9.993 -11.709 17.296q0.194 0.744 0.479 1.441zm19.577 -6.138c-1.514 -0.537 -3.121 -0.806 -4.966 -0.806 -5.726 0 -10.681 2.961 -12.844 7.224a0.857 0.857 0 0 1 -0.119 0.243 10.5 10.5 0 0 0 -1.039 4.557c0 6.67 6.304 12.021 14.003 12.021 4.502 0 9.399 -2.471 11.351 -6.177 -0.791 0.319 -1.705 0.563 -2.686 0.707 -1.372 1.705 -4.95 3.491 -8.769 3.491 -6.421 0 -11.575 -4.576 -11.575 -10.126 0 -2.729 1.42 -5.521 4.627 -7.721a6.786 6.786 0 0 1 0.181 -1.955 0.857 0.857 0 0 1 0.397 -0.541 6.821 6.821 0 0 1 7.541 0.369q0.159 0.116 0.31 0.241c0.093 -0.084 0.154 -0.129 0.306 -0.241a6.786 6.786 0 0 1 3.283 -1.286zM16.936 24.398c-2.216 1.726 -3.265 3.789 -3.265 5.853 0 4.673 4.446 8.401 9.851 8.401 2.302 0 4.518 -0.72 6.013 -1.655a12.714 12.714 0 0 1 -3.239 -0.616 8.357 8.357 0 0 1 -2.722 0.448c-4.161 0 -7.483 -2.987 -7.483 -6.586 0 -1.063 0.188 -2.426 1.832 -3.983a6.857 6.857 0 0 1 -0.986 -1.862zM33.532 14.264a10.571 10.571 0 0 1 1.394 2.939 12.714 12.714 0 0 1 2.668 2.345c3.897 4.513 3.606 11.599 -0.239 15.134a9.286 9.286 0 0 1 -1.171 2.819 10 10 0 0 0 2.625 -1.641c4.89 -4.217 4.821 -12.224 -0.048 -17.864 -1.301 -1.506 -3.264 -2.797 -5.23 -3.732m1.886 5.506c0.119 1.158 0.095 2.106 0.095 2.541q0.019 0.033 0.036 0.064c0.749 1.371 1.346 3.173 1.361 4.889 0.017 1.864 -0.638 3.625 -2.39 4.741 -1.946 1.241 -6.599 1.75 -9.739 -1.375a5.5 5.5 0 0 1 -1.129 -1.643 6.786 6.786 0 0 1 -2.517 -0.375c0.051 0.531 0.166 1.039 0.439 1.574 3.164 6.214 10.798 5.866 13.851 3.828 3.979 -2.656 4.39 -9.259 0.864 -13.341a11.429 11.429 0 0 0 -0.871 -0.904M19.121 27.499c-1.131 1.079 -1.308 2.003 -1.308 2.744 0 2.72 2.612 4.861 5.759 4.861h0.094c-1.431 -0.952 -2.696 -2.3 -3.629 -4.134 -0.563 -1.103 -0.647 -2.095 -0.675 -3.286 -0.009 -0.007 -0.015 -0.014 -0.024 -0.018a6.429 6.429 0 0 1 -0.219 -0.168m12.604 -0.804a6.857 6.857 0 0 1 -1.067 0.972c-0.216 0.157 -0.464 0.324 -0.75 0.486 0.241 0.904 0.341 1.937 0.233 3.105a6.929 6.929 0 0 0 1.969 -0.132v-0.001c0.16 -1.7 0.005 -3.171 -0.386 -4.429m-3.436 2.097c-0.716 0.186 -1.579 0.291 -2.614 0.248 0.095 0.129 0.2 0.25 0.319 0.369a6.286 6.286 0 0 0 2.444 1.509c0.056 -0.784 -0.002 -1.493 -0.149 -2.125m5.145 -6.468a6.857 6.857 0 0 1 -0.58 2.604q0.076 0.09 0.126 0.207c0.629 1.448 0.979 3.171 0.908 5.206 0.971 -0.769 1.304 -1.896 1.295 -3.062 -0.013 -1.434 -0.526 -2.934 -1.149 -4.079 -0.009 -0.014 -0.016 -0.032 -0.026 -0.047a0.857 0.857 0 0 1 -0.154 -0.254 5.714 5.714 0 0 0 -0.421 -0.575m-7.697 3.379a5.071 5.071 0 0 0 -2.071 -3.914 5.093 5.093 0 0 0 -5.31 -0.452v0.002a5.107 5.107 0 0 0 2.004 4.939A5.079 5.079 0 0 0 24.714 27.093l-4.618 -3.401a0.862 0.862 0 1 1 1.021 -1.388zm1.597 1.52c1.076 -0.181 1.804 -0.579 2.302 -0.944a5.1 5.1 0 0 0 2.004 -4.941 5.093 5.093 0 0 0 -5.31 0.452 2.857 2.857 0 0 0 -0.151 0.114 6.857 6.857 0 0 1 0.899 1.724l1.801 -1.325a0.861 0.861 0 1 1 1.021 1.388l-2.449 1.804a6.857 6.857 0 0 1 -0.119 1.729m8.961 -13.414c-2.718 -4.873 -9.172 -7.321 -15.616 -5.625 -7.386 1.943 -12.108 8.636 -10.516 15.046a14.286 14.286 0 0 1 2.026 -2.328c-0.179 -4.686 3.487 -9.293 9.009 -10.746 3.463 -0.911 6.681 -0.401 9.174 1.11l0.045 0.011c1.757 0.453 3.919 1.343 5.877 2.533zm-2.56 6.361c-0.082 -0.905 -0.257 -1.95 -0.624 -2.965 -1.566 -4.336 -6.2 -6.77 -11.476 -5.381 -4.134 1.086 -7.116 4.199 -7.644 7.646a16.214 16.214 0 0 1 2.836 -1.536c0.889 -1.904 2.797 -3.526 5.287 -4.181 4.034 -1.062 7.931 1.209 8.814 4.486q0.34 0.169 0.677 0.353 0.124 0.069 0.218 0.17a12.857 12.857 0 0 1 1.911 1.41zm-5.151 -2.874c-1.212 -1.634 -3.609 -2.516 -6.031 -1.877 -1.181 0.31 -2.207 0.889 -2.983 1.629a17.857 17.857 0 0 1 4.051 -0.463c1.826 0 3.443 0.239 4.961 0.711z"
          fillRule="evenodd"
          fill="#fc4c69"
        />
        <path
          d="M80.557 36.94q-0.697 0.955 -2.405 1.708t-3.729 0.753q-3.121 0 -5.418 -1.396t-3.507 -3.801T64.286 28.859t1.212 -5.344 3.508 -3.801 5.418 -1.396q2.094 0 3.691 0.716t2.443 1.819v-2.094h5.436v20.201h-5.436zm-1.285 -12.213q-1.506 -1.598 -4.041 -1.598 -2.571 0 -4.059 1.598t-1.488 4.132q0 2.461 1.525 4.077t4.021 1.616q2.571 0 4.059 -1.524t1.487 -4.169q0 -2.534 -1.506 -4.132m17.3 -8.962q-0.881 0.863 -2.13 0.863 -1.286 0 -2.186 -0.863t-0.9 -2.112q0 -1.212 0.9 -2.076T94.443 10.714q1.249 0 2.13 0.863t0.882 2.076q0 1.249 -0.882 2.112m-4.885 3.03h5.51v20.165h-5.51zm27.126 19.688q-2.516 -0.992 -4.316 -3.361t-1.8 -6.189 1.819 -6.171 4.352 -3.342 4.812 -0.991q2.644 0 5.032 1.175t3.911 3.453 1.598 5.4q0 0.954 -0.036 1.652t-0.074 0.882h-15.941q0.441 2.13 2.204 2.901t3.306 0.771q1.984 0 3.159 -0.716t2.021 -1.634l4.261 2.461q-3.453 4.701 -9.44 4.701 -2.351 0 -4.867 -0.991m1.121 -14.123q-1.433 1.12 -1.616 2.736h10.101q-0.11 -0.954 -0.734 -1.836t-1.671 -1.451 -2.369 -0.569q-2.277 0 -3.709 1.121m17.594 11.919 2.865 -3.82q1.323 0.919 3.086 1.543t3.453 0.624q1.249 0 2.075 -0.514t0.826 -1.286 -0.936 -1.083 -1.818 -0.441 -1.139 -0.166q-2.204 -0.367 -3.801 -0.881t-2.901 -1.836 -1.304 -3.636q0 -3.82 2.774 -5.106t5.564 -1.286q2.388 0 4.408 0.698t4.004 2.204l-2.864 3.746q-1.433 -0.845 -2.829 -1.359t-2.902 -0.514q-0.918 0 -1.781 0.404t-0.863 1.102q0 0.881 1.193 1.249t2.627 0.551q2.571 0.441 4.114 0.919t2.736 1.781 1.194 3.691q0 3.159 -2.167 4.867t-6.134 1.707q-5.51 0 -9.477 -3.159m26.704 1.782q-2.534 -1.414 -4.021 -3.839t-1.488 -5.289 1.487 -5.271 4.004 -3.819 5.491 -1.414q3.196 0 5.786 1.524t4.132 4.352l-4.959 1.947q-0.882 -1.506 -2.167 -2.259t-2.792 -0.753q-2.387 0 -3.949 1.616t-1.561 4.077 1.579 4.077 3.967 1.616q3.306 0 5.106 -2.938l4.664 1.836q-2.901 5.951 -9.77 5.951 -2.976 0 -5.51 -1.414m23.453 -0.036q-2.516 -1.414 -3.986 -3.839t-1.469 -5.289q0 -2.829 1.469 -5.252t3.986 -3.839 5.491 -1.414 5.509 1.414 4.022 3.839 1.488 5.252q0 2.865 -1.488 5.289t-4.021 3.839 -5.51 1.414 -5.491 -1.414m2.7 -14.068q-1.286 0.753 -2.021 2.057t-0.734 2.883q0 1.653 0.716 2.957t1.984 2.057 2.846 0.753q1.543 0 2.81 -0.753t2.001 -2.076 0.735 -2.939q0 -1.579 -0.735 -2.883t-2.001 -2.057 -2.81 -0.753q-1.506 0 -2.791 0.753m18.329 -12.764h5.51v27.769h-5.51zm27.75 9.44q1.892 2.241 1.892 6.391v11.937h-5.584V27.023q0 -2.167 -1.084 -3.122t-2.846 -0.955q-1.506 0 -2.718 1.194t-1.139 4.132v10.689h-5.474V11.155h5.474V20.557q0.991 -0.991 2.497 -1.579t2.902 -0.589q4.187 0 6.079 2.241m12.416 17.851q-2.516 -0.992 -4.316 -3.361t-1.8 -6.189 1.819 -6.171 4.353 -3.342 4.811 -0.991q2.645 0 5.032 1.175t3.912 3.453 1.598 5.4q0 0.954 -0.037 1.652t-0.074 0.882H248.236q0.441 2.13 2.204 2.901t3.306 0.771q1.984 0 3.159 -0.716t2.02 -1.634l4.261 2.461q-3.453 4.701 -9.44 4.701 -2.351 0 -4.866 -0.991m1.12 -14.123q-1.433 1.12 -1.616 2.736h10.101q-0.111 -0.954 -0.735 -1.836t-1.671 -1.451 -2.369 -0.569q-2.278 0 -3.71 1.121"
          fill="#6b7280"
        />
      </svg>
    </div>
  )
}

export default Logo